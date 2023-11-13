// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'


function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Education />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
