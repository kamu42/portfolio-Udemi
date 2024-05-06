import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Container from './components/container/Container';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
     <Navbar/>
     <Container>
       <AboutMe/>
       <Projects/>
       <Contact/>
     </Container>
    </>
  );
}

export default App;
