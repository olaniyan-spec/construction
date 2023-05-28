import React from 'react'
import Card from './Card'
import {data} from '../data'

const HeaderCard = () => {
  return (
   <section className='header_card'>
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
   </section>
  )
}

export default HeaderCard