import './App.css';
import Nav from './components/Nav';
import Startlorn from './components/Startlorn';
import Advantages from './components/Advantages';
import OurCourse from './components/OurCourse';
import OurTime from './components/OurTime';
import Signup from './components/Signup';
import Footer from './components/Footer';
 


function App() {
  return (
      <div className="App">
        <Nav />
        <Startlorn />
        <Advantages />
        <OurCourse />
        <OurTime />
        <Signup />
        <Footer />
        
      </div>

  );
}

export default App;
