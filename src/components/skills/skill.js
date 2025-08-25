import React from 'react'
import './skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skill = () => {
  return (
    <section id="skill">
        <span className="skillTitle">What I do</span>
        <span className="Skilldescriptiom"> I’m Amiljith JS, a passionate Python Full Stack Developer and Video Editor.  
On the development side, I specialize in building dynamic and responsive web applications using Python, Django, REST APIs, and modern front-end frameworks.  
I enjoy crafting seamless user experiences by combining clean design with efficient back-end solutions.  

Alongside coding, I’m also skilled in video editing — creating engaging, polished content with smooth transitions and storytelling.  
This mix of technical and creative expertise allows me to deliver complete digital solutions, from functional applications to visually compelling media.</span>
        <div className="skillbars">
            <div className="skillbar">
                <img src={UIDesign} alt="" className="skillbarimg" />
                <div className="skillBartext">
                    <h2>Full Stack Developer</h2>
                    <p>Designing and developing complete web applications from front-end UI to back-end systems with seamless integration</p>
                </div>
            </div>
             <div className="skillbar">
                <img src= {WebDesign} alt="" className="skillbarimg" />
                <div className="skillBartext">
                    <h2>Web Design</h2>
                    <p>Creating responsive, user-friendly, and visually appealing websites with modern UI/UX practices</p>
                </div>
            </div>
             <div className="skillbar">
                <img src={AppDesign} alt="" className="skillbarimg" />
                <div className="skillBartext">
                    <h2>Video Editing</h2>
                    <p>Crafting engaging and professional videos with smooth transitions, effects, and storytelling to bring ideas to life</p>
                </div>
            </div>
        </div>

        
    </section>
  )
        

}

export default skill