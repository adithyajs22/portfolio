import { useEffect} from 'react'
import './App.css'
import HomeSection from './components/HomeSection/HomeSection'
import Navbar from './components/Navbar/Navbar'
import SkillSection from './components/SkillSection/SkillSection'
import ProjectSection from './components/ProjectSection/ProjectSection'
import ContactSection from './components/ContactSection/ContactSection'
import WhatIKnowSection from './components/WhatIknow/WhatIknow'

import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
  <>
   <div className="right-glow"></div>
      <div className="blob-left"></div>

     <div className="app-container">
       <Navbar/>
       <HomeSection id ="home"/>
       <SkillSection id = "skills"/>
       <WhatIKnowSection id="what-i-know"/>
       <ProjectSection id = "projects"/>
       <ContactSection id = "contacts"/>
     
      
      </div>
   </>
  )
}

export default App
