import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills/Skillset'
import StarsBackground from './Components/StarsBackground/StarsBackground'
import Internship from './Components/Internship/Internship'
import Coding from './Components/Coding/Coding'
const App = () => {
  return (
    <div>
      
      <StarsBackground/>

      <Navbar/>
      
      <Hero/>

      <About/>

      <Skills/>   

      <Coding/>

      <Internship/>   

      <Services/>

      <MyWork/>

      <Contact/>

      <Footer/>
    </div>
  )
}

export default App