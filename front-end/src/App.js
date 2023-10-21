import logo from './logo.svg';
import './App.css';
import OurProjects from './Sections/OurProjects';
import Navbar from './Sections/Navbar';
import Cover from './Sections/Cover';
import OurVision from './Sections/OurVision';
import OurTeam from './Sections/OurTeam';
import Contact from './Sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <OurVision />
      <OurProjects />
      <OurTeam />
      <Contact />
    </div>
  );
}

export default App;
