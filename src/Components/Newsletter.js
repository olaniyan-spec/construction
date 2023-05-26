import React from 'react'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <div className='container newsletter-container'>
            <div className='newsletter-left'>
                <h1>Newsletters</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non ac proin vitae massa. Mi mollis sed nunc hac  sed sodales tristique erat sed non adipiscing ullamcorper. Ultricies orci hendrerit dui lacus vel quam massa.. </p>
            </div>
            <div className='newsletter-right'>
                <form>
                    <label/>Name:<br/>
                    <input type='text' placeholder='Enter Full Name'/><br/>
                    <label/>Email:<br/>
                    <input type='text' placeholder='Enter email address'/><br/>
                    <label/>Message:<br/>
                   <article><input type='text' placeholder='Enter Message here'/></article>
                   <button className='btn btn-form'>Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Newsletter