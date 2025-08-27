import React from 'react'
import './project.css';

const project = () => {
  return (
  <section id="project">
    <h2 className='projectheader'>Projects</h2>
    <div className="projectsmain">
      <div className="projectcard">
        <h3 className='projecttitle'>ONLINE SWEET SHOP WEBSITE: </h3>
        <p className='projectdescription'>An online e-commerce sweet shop website using Django and Python. It consists of three modules: The 
admin, user, and the seller where the user can buy products, seller can add and manage products along 
with viewing the order details. The admin can view and control the activities of both seller and user. </p>
      </div>
      <div className="projectcard">
        <h3 className='projecttitle'>PORTFOLIO WEBSITE: </h3>
        <p className='projectdescription'>Designed and developed a responsive personal portfolio website to showcase my skills, 
    projects, and professional journey as a Full Stack Developer and Video Editor. 
    The website features a clean UI with smooth navigation, dynamic project cards, 
    and dedicated sections for skills, services, and contact information. 
    Built using <b>React, CSS, and JavaScript</b> with a focus on performance optimization, 
    cross-browser compatibility, and mobile responsiveness to deliver a seamless user experience. </p>
      </div>
      <div className="projectcard">
        <h3 className='projecttitle'>ACCIDENT SPEED DETECTION USING SPEEDOMETER: </h3>
        <p className='projectdescription'>Designed and implemented a safety system that detects vehicle collisions and records the speed at the 
moment of impact by locking the speedometer reading. The system uses collision sensors to detect 
accidents, captures real-time vehicle location using GPS, and transmits both speed and location data to 
relevant authorities for immediate response and assistance. </p>
      </div>
      <div className="projectcard">
        <h3 className='projecttitle'>VOICE CONTROLLED WHEELCHAIR: </h3>
        <p className='projectdescription'>Developed an automatic wheelchair system designed to assist physically disabled individuals with 
mobility challenges. The system utilizes an Arduino microcontroller interfaced with a voice recognition 
application to control movement through spoken commands. DC motors are used to drive the wheelchair 
based on the input received, enabling hands-free, user-friendly navigation </p>
      </div>
    </div>
  </section>
  )
}

export default project