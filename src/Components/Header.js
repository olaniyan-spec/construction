import React from 'react'
import Card from './Card'
import {data} from '../data'

const Header = () => {
  return (
    <header className='header'>
        <div className='container header-container'> 
            <div className='header-content'>
                <h1>Building safe homes the right way.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non ac proin vitae massa. Mi mollis sed nunc hac sed sodales tristique erat sed non adipiscing ullamcorper. </p>
                <button className='btn btn-white'>View Projects</button>
                <button className='btn btn-black'>Contact Us</button>
            </div> 
        
        <div className='header-card'>
            {
                data.map((res, id)=>{
                    return <Card key={id}>
                        <h2>{res.title}</h2>
                        <h4>{res.desc}</h4>
                        <small>{res.text}</small>
                    </Card>
                })
            }
        </div>
        </div>
    </header>
  )
}

export default Header