import React from 'react'
import Header from '../Components/Header'
import './Home.css'
import Projects from '../Components/Projects'
import Expertise from '../Components/Expertise'
import Team from '../Components/Team'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
        <Header/>
        <Projects/>
        <Expertise/>
        <Team/>
        <Newsletter
        
        />
        
    </div>
  )
}

export default Home