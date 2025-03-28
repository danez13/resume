import { useState } from 'react'
import Header from "./Sections/Header/Header.jsx"
import Footer from "./Sections/Footer/Footer.jsx"
import About from "./Sections/About/About.jsx"
import Education from "./Sections/Education/Education.jsx"
import SkillsTechs from "./Sections/SkillsTechs/SkillsTechs.jsx"
import Experiences from "./Sections/Experiences/Experiences.jsx"
import Projects from "./Sections/Projects/Projects.jsx"
import Leadership from "./Sections/Leadership/Leadership.jsx"
import './App.styles.css'

function App() {
  return (
    <>
      <Header />
      <About />
      <Education />
      <SkillsTechs />
      <Experiences />
      <Projects />
      <Leadership />
      <Footer />
    </>
  )
}

export default App
