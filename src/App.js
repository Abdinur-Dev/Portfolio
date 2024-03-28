
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Header from './component/Header';
import SectionOne from './Pages/SectionOne';
import About from './Pages/About';
import Project from './Pages/Project';
function App() {
  return (
    <>
    
    <div>
       <Header/>
       
       <Routes>
    
   
    {/* <Route path="/cours_Aplly" element={<CouseAply />} />  */}
    {/* <Route path="//cours_Aplly" element={<WHYYOUCHOOSE />} />  */}
    
    
 

    </Routes>
    </div>
    <div className='grid'>
    {/* <Course/> */}

    <Routes>
    
   
    <Route path="/About" element={<About />} />
    <Route path="/" element={<HomePage/>} />
    <Route path="/project" element={<Project />} />
    
 
    {/* <Footer/> */}
    </Routes>

    {/* <Footer/> */}
    </div>


    </>
  );
}

export default App;
