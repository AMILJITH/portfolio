
import './App.css';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skill from './components/skills/skill';
import Works from './components/works/works';
import Project from './components/projects/project';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div >
      <Navbar />
      <Intro />
      <Skill />
      <Works/>
      <Project />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
