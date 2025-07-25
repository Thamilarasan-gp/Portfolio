import './App.css';
import About from './components/About';
import Achievements from './components/Achievements';
import Achievements2 from './components/Achievements2';
import Chatbot from './components/Chatbot';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Contact from './components/Contact';
import DecryptingView from './components/DecryptingView';
import DockApp from './components/Dock';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SkillsBlock from './components/SkillsBlock';
import TechStack from './components/TechStack';
import SplashCursor from './components/SplashCursor'


function App() {
  return (
    <div className="portfolio">
      <SplashCursor />
   <Navbar/>
 <Hero/>
   <About/>
   <TechStack/>
     <Experience/>
   <Projects/>
   <DockApp/>
<Chatbot/>
    <CompetitiveProgramming/>
   <Achievements/>
   {/* <Skills/> */}
   <Achievements2/>
 {/* <DecryptingView/> */}

   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;