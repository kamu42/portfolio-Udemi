import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Navbar from './components/Navbar/Navbar';
import Container from './components/container/Container';

function App() {
  return (
    <>
     <Navbar/>
     <Container>
       <AboutMe/>
     </Container>
    </>
  );
}

export default App;
