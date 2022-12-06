import React from 'react';

const RelevantResources = () => {
  return (

    <div style={{display: "flex", justifyContent: "space-between"}}>
         <div>
      <h3> Learn about tech in healthcare!</h3>
    </div>
      <div>
      <Image source="AIMS.jpeg" link="https://aimseducation.edu/blog/the-impact-of-technology-on-healthcare"/>
      <Image source="tech.png" link="https://revcycleintelligence.com/features/value-based-contracting-101-preparing-negotiating-and-succeeding"/>
      <Image source="rass.png" link="https://www.rasmussen.edu/degrees/health-sciences/blog/technology-in-healthcare-transformation/"/>
      <Image source="AIM.jpeg" link="https://research.aimultiple.com/rpa-healthcare/"/>
      </div>
    </div>
  );
};

const Image = (props) => {
  return(
    <a href={props.link} target="_blank">
      <img 
        src={props.source}
        alt='resourceImage'
        style={{
          width:'200px', 
          height:'200px',
          borderStyle: 'solid', 
          borderWidth: '2px',
          borderRadius: '10px',
          borderColor: 'black',
          padding: '10px',
        }}
      />
    </a>
  )
}


export default RelevantResources;
