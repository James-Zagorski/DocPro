import React from 'react';

const RelevantResources = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <img 
        src="AIMS.jpeg" 
        alt="AIMS"
        className='AIMS-image'
        style={{width:'220px'}}
      />
      <img 
        src="rass.png" 
        alt="rass"
        className='rass-image'
        style={{width:'220px'}}
      />
      <img 
        src="tech.png" 
        alt="tech"
        className='tech-image'
        style={{width:'220px'}}
      />
      <img 
        src="AIM.jpeg" 
        alt="AIM"
        className='AIM-image'
        style={{width:'220px'}}
      />
    </div>
  );
};

export default RelevantResources;
