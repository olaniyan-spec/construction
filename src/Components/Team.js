import React, { useState } from 'react'
import { team } from '../data'
import NewCard from './NewCard'

const Team = () => {
    const[load, setLoad] =useState(3)
    
    const slice = team.slice(0, load)
    const loadMore = ()=>{
        setLoad(load + load)
    }
    if(load >=7){
        setLoad(3)
    }
  return (
    <section className='team'>
        <div className='container team-head'>
            <h1>MEET THE TEAM</h1>
            <p onClick={loadMore}>See all</p>
        </div>
        <div className='team-wrapper'>
            {
            slice.map((data,id)=>{
                return <NewCard key={id} className='card-content'>
                     <img src={data.image} alt='data'/>
                    <h3>{data.name}</h3>
                    <h5>{data.role}</h5>
                    <p>{data.content}</p>
                </NewCard>
            })
            }
        </div>
    </section>
  )
}

export default Team