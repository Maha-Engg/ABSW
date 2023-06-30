import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="locot">
    <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>

      </div>
    
      <div >
    


    <div className='form' >
        <h3 > Get in Touch</h3> 
        <div className="row">
  <div className="col">
    <input type="text" className="form-control" placeholder="FullName" 
     aria-label="FullName"/>
  </div>
  <div className="col">
    <input type="number" className="form-control" placeholder="Phone no" 
     aria-label="Phone no"/>
  </div>
</div><div className="row">
  <div className="col">
    <input type="email" className="form-control" placeholder="Email" name="email"
    aria-label="mail"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Company" 
     aria-label="Company"/>
  </div>
  <div className="row" >
    <textarea type="text" className="form-control" placeholder="Message" 
     aria-label="message"/> 
  </div>
  <div className="row" >
   <button className="submit"> Submit </button>
   
   </div>
</div>

    </div>
   </div>
   
    
    </div>
  );
}