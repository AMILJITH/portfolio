
import './App.css';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skill from './components/skills/skill';
import Works from './components/works/works';
import Project from './components/projects/project';

function App() {
  return (
    <div >
      <Navbar />
      <Intro />
      <Skill />
      <Works/>
      <Project />
    </div>
  );
}

export default App;
