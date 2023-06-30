import React from 'react'
import "./edit.css"
import {GrClose} from 'react-icons/gr'

const Carrierdata = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <div className="addContainer">
            <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleclose}><GrClose/></div>
              <label htmlFor="name">Post : </label>
              <input type="text" id="name" name="post" onChange={handleOnChange} value={rest.post}/>

              <label htmlFor="name">Experience : </label>
              <input type="text" id="name" name="experience" onChange={handleOnChange} value={rest.experience}/>

              <label htmlFor="name">Skill : </label>
              <input type="text" id="name" name="skill" onChange={handleOnChange} value={rest.skill}/>

              <label htmlFor="email">Email : </label>
              <input type="email" id="email" name="mail" onChange={handleOnChange} value={rest.mail}/>

              <label htmlFor="mobile">Contact : </label>
              <input type="number" id="mobile" name="contact" onChange={handleOnChange} value={rest.contact}/>

              <button className="btn">Submit</button>
            </form>
    </div>
  )
}

export default Carrierdata