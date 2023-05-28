import React from 'react'
import Header from '../Components/Header'
import Projects from '../Components/Projects'
import Expertise from '../Components/Expertise'
import Team from '../Components/Team'
import Newsletter from '../Components/Newsletter'
import './Home.css'
import HeaderCard from '../Components/HeaderCard'

const Home = () => {
  return (
    <div>
        <Header/>
        <HeaderCard/>
        <Projects/>
        <Expertise/>
        <Team/>
        <Newsletter
        
        />
        
    </div>
  )
}

export default Home