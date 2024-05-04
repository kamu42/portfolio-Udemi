import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
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
     </Container>
    </>
  );
}

export default App;
