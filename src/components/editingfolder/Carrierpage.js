import './edit.css';
// import {GrClose} from 'react-icons/gr'
import { useEffect, useState } from 'react';
import axios from "axios"
import Carrierdata from './Carrierdata';

axios.defaults.baseURL = "https://my-pjt-maha-engg.vercel.app/"

function Carrierpage() {
  const [addSection,setAddSection] = useState(false)
  const [editSection,setEditSection] = useState(false)
  const [formData,setFormData] = useState({
    post : "",
    experience: "",
    skill : "",
    mail : "",
    contact : "",
  })
  const [formDataEdit,setFormDataEdit] = useState({
    post : "",
    experience: "",
    skill : "",
    mail : "",
    contact : "",
    _id : ""
  })
  const [dataList,setDataList] = useState([])

  const handleOnChange = (e)=>{
    const {value,name} = e.target
    setFormData((preve)=>{
        return{
          ...preve,
          [name] : value
        }
    })
  }


  const handleSubmit = async(e)=>{
      e.preventDefault()
      const data = await axios.post("/create",formData)
      console.log(data)
      if(data.data.success){
          setAddSection(false)
          alert(data.data.message)
          getFetchData()
          setFormData({
             post : "",
             experience: "",
             skill : "",
             mail : "",
              contact : "",
          })

      }
  }
  const getFetchData = async()=>{
    const data = await axios.get("/")
    console.log(data)
    if(data.data.success){
        setDataList(data.data.data)
    }
  }
  useEffect(()=>{
    getFetchData()
  },[])

  const handleDelete = async(id)=>{
    const data = await axios.delete("/delete/"+id)
    
      if(data.data.success){
        getFetchData()
        alert(data.data.message)
      }
  }

  const handleUpdate = async(e)=>{
    e.preventDefault()
    const data = await axios.put("/update",formDataEdit)
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
      setEditSection(false)
    }
  }
  const handleEditOnChange = async(e)=>{
    const {value,name} = e.target
    setFormDataEdit((preve)=>{
        return{
          ...preve,
          [name] : value
        }
    })
  }
  const handleEdit = (el)=>{
    setFormDataEdit(el)
    setEditSection(true)
  }
  return (
   <>
      <div className="container">
        <button className="btn btn-add" onClick={()=>setAddSection(true)}>Add</button>

      {
        addSection && (
          <Carrierdata
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleclose = {()=>setAddSection(false)}
            rest={formData}
          />
        )
      }
      {
        editSection && (
          <Carrierdata
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleclose = {()=>setEditSection(false)}
            rest={formDataEdit}
          />
        )
      }


      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>Post</th>
              <th>Experience</th>
              <th>Skill</th>
              <th>Mail</th>
              <th>Contact</th>
              <th>
              
              </th>
            </tr>
          </thead>
          <tbody>
            { dataList[0] ? (
              dataList.map((el)=>{
                console.log(el)
                return(
                  <tr>
                    <td>{el.post}</td>                           
    
                    <td>{el.experience}</td>
                    <td>{el.skill}</td>
                    <td>{el.mail}</td>
                    <td>{el.contact}</td>
                    <td>
                      <button className='btn btn-edit' onClick={()=>handleEdit(el)}>Edit</button>
                      <button className='btn btn-delete' onClick={()=>handleDelete(el._id)}>Delete</button>
                    </td>
                  </tr>
                )
              }))
              : (
                <p style={{textAlign : "center"}}>No data</p>
              )
            }
          </tbody>
        </table>
      </div>
     


      </div>
   </>
  );
}

export default Carrierpage;