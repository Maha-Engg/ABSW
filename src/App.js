import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Solutions from './components/Solutions'
import Fronthome from './Fronthome'
import Contact from './components/contactfolder/Contact'
import Aboutt from './components/aboutfolder/Aboutt'
import Automation from './components/automation/Automation'
import Energy from './components/automation/Energy'
import Service from './components/services/Service'
import Market from './components/Marketfolder/Market'
import Carrier from './components/careerfolder/Carriers'
import Carrierpage from './components/editingfolder/Carrierpage'

import  './App.css'
import  './App1.css'
import  './App2.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Fronthome/>}></Route>
      <Route path="/" element={<Fronthome/>}></Route>
      <Route path="/about" element={<Aboutt/>}></Route>
      <Route path="/automation" element={<Automation/>}></Route>
      <Route path="/energy" element={<Energy/>}></Route>

      <Route path="/solutions" element={<Solutions/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/market" element={<Market/>}></Route>
      <Route path="/carrier" element={<Carrier/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/carrierpage" element={<Carrierpage/>}></Route>
      
        
     
    </Routes>
    </BrowserRouter>
  )
}

export default App