import React from 'react'

const Topbar =() =>{
    return (
        <>

        <div className='md:p-3 bg-primary md:flex justify-between items-center'>
            <div className='space-x-5 md:flex'>
            <img className='space-x-5 pt-3 ml-10 mr-4' src='/image/brand_logo.png' alt='logo'></img>
            </div>
            <div>
            <ul className='md:flex space-x-5'>
            <li className='space-x-5 md:flex'>
               <a href='#'>Home</a>
              <a href='#'>About</a>
              <a href='#'>Location</a>
              <a href='#'>Contact</a>
            </li>
         </ul>
            </div>
            
            <div className='md:flex space-x-5 pr-10'>
            <button className='bg-red  p-3 space-x-5 h-100px  md-flex  text-white '>login</button>
            </div>
       
         </div>
       </>
    )
}
export default Topbar 