import React, {  useState } from 'react'
import { building } from '../data'
import NewCard from './NewCard'


const Projects = () => {
  const [load, setLoad]= useState(2);
  const slice = building.slice(0, load);
  const loadMore = ()=>{
    setLoad(load + 4);
  }

  if(load >= 7){
    setLoad(2)
  }
  return (
    <section className='projects' id='project'>
        <div className='container project-head'>
            <h1>PROJECT</h1>
            <p onClick={loadMore}>See all</p>
        </div>
        <div className='Card'>
            {
               slice.map((data, id)=>{
                return <NewCard className='project-card' key={id}>
                  <img src={data.image} alt='data'/>
                  <div className='date-wrapper'>
                    <h4>{data.title}</h4>
                    <small>{data.date}</small>
                  </div>
                    <p>{data.text}</p>
                </NewCard>
               }) 
            }
        </div>
    </section>
  )
}

export default Projects