import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';


const works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">Portfolio</h2>
        <span className='worksDesc'> My portfolio showcases a collection of projects where creativity meets 
  functionality. From building sleek user interfaces to developing 
  robust backend systems, <br></br>I focus on delivering digital solutions that 
  not only look great but also solve real problems. Each project reflects 
  my passion for innovation and attention to detail.</span>
  <div className="worksimg">
    <img src={Portfolio1} alt="" className="worksImg" />
    <img src= {Portfolio2} alt="" className="worksImg" />
    <img src= {Portfolio3}alt="" className="worksImg" />
    <img src= {Portfolio4} alt="" className="worksImg" />
    <img src={Portfolio5} alt="" className="worksImg" />
    <img src={Portfolio6} alt="" className="worksImg" />
  </div>
  <button className="seemore">See more</button>

    </section>
  )
}

export default works