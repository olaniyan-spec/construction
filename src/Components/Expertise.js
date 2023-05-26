import React, { useState } from 'react'
import { expertise } from '../data'
import NewCard from './NewCard';
const Expertise = () => {
    const [index, setIndex] = useState(0);
    const [showing, setShowing] = useState(false)
    const {image,content} = expertise[index];
    const nextHandler = ()=>{
        setIndex(index + 1)
        if(index >= expertise.length-1){
            setIndex(0)
    }
}
const beforeHandler = ()=>{
    setIndex(prev=>prev - 1)
    if(index <= expertise.length-1 ){
        setIndex(0)
    }
}

const maxChars = 50;
if (content.length<= maxChars) return <p>{content}</p>
let text = showing ? content.substring(0, maxChars) : content

const Toggle =()=>{
setShowing(prev=>!prev)
}

  return (
   <section className='expertise' id='expertise'>
    <div className='container expertise-head'>
        <h1>OUR EXPERTISE</h1>
    </div>
         <div className='expertise-wrapper'>
         <img src={image} alt='data'/>
                <p className='content'>{content}</p>
                <div className='show-toggle'>
                    <p className='show'>{text}...</p>
                    <button onClick={Toggle}className='btn btn-black'>{
                        showing? 'Read More' : 'Read Less'
                    }</button>
                </div>
                 <span className='border'></span>
        </div>       
                <div className='button-wrapper'>
                    <button className='btn btn-white' onClick={beforeHandler}>Previous</button>
                    <button className='btn btn-black' onClick={nextHandler}>Next</button>
                </div>           
   </section>
  )
  }

export default Expertise
// {
//     expertise.map((data, id)=>{
//         return <NewCard key={id} >
//         <img src={data.image} alt='data'/>
//     <p className='content'>{data.content}</p>
//     <span className='border'></span>
//     <div className='show-toggle'>
//         <p className='show'>{text}...</p>
//         <button onClick={Toggle}className='btn btn-black'>{
//             showing? 'Read More' : 'Read Less'
//         }</button>
//         <span className='border'></span>
//     </div> 
//         </NewCard>
//     })
// }
