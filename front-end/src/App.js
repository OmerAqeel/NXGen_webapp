import logo from './logo.svg';
import './App.css';
import OurProjects from './Sections/OurProjects';
import Cover from './Sections/Cover';
import OurTeam from './Sections/OurTeam';
import Contact from './Sections/Contact';

function App() {
  return (
    <div className="App">
      <Cover />
      <OurProjects />
      <OurTeam />
      <Contact />
    </div>
  );
}

export default App;
