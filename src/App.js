import {Routes,Route,useLocation} from 'react-router-dom'
import Home from './components/containers/home/Home'
import About from './components/containers/about/components'
import Resume from './components/containers/resume/Resume'
import Skills from './components/containers/skills/Skills'
import Portfolio from './components/containers/portfolio/Portfolio'
import Contact from './components/containers/contact/Contact'
import Navbar from './components/navbar/Navbar'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from './utils/particles-config'
import './App.scss'


function App() {
  const location =useLocation()
  console.log(location);

const handleInit=async(main)=>{
  await loadFull(main)
}

const renderParticlesInHome=location.pathname==="/"
 
  return (
    <div className='App'>
  {/*particles*/}
  {
    renderParticlesInHome&&(
      <Particles id='particles' init={handleInit} options={particlesConfig}/>
    )}
 
  {/*navbar*/}
  <Navbar />
  {/*main page content*/}
  <div className='App__main__page__content'>
    <Routes>
  <Route path={'/'} element={<Home />}/>
  <Route path={'/about'} element={<About />}/>
  <Route path={'/resume'} element={<Resume />}/>
  <Route path={'/skills'} element={<Skills />}/>
  <Route path={'/portfolio'} element={<Portfolio />}/>
  <Route path={'/contact'} element={<Contact />}/>
  </Routes>
  </div>

    </div>
  );
}

export default App;
