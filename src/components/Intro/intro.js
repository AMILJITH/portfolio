import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnimg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introwrap">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introtext">
            I'm <span className="introname">Amiljith JS<br /></span>
            <span className="job">Full Stack Developer</span>
          </span>
          <p className="description">
            I am a passionate full-stack developer with expertise in creating dynamic and responsive web applications.
            Skilled in both front-end and back-end technologies,
            I thrive on building seamless user experiences and efficient server-side solutions.
          </p>
          <Link>
            <button className="btn">
              <img src={btnimg} alt="" className="btnimg" />HIRE ME
            </button>
          </Link>
        </div>
        <div className="profilepic">
          <img src={bg} alt="profile" className="bg" />  
        </div>
      </div>
    </section>
  )
}

export default Intro;
