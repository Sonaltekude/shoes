import React from 'react'
const Middle = () => {

    return (
        <>
           <div className='Hero container md:p-7  md:flex justify-between items-center ml-14 h-auto '>
            <div className='Hero-content'>
                <h1 className='font-bold text-8xl'>YOUR FEET DESERVE THE BEST</h1>
                <p className='p-3'>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='hero-btn   h-10  w-49  p-2  text-white'>
                    <button className=' bg-red border-2 p-1'>Shop Now</button>
                    <button className='ml-3 bg-transparent text-gray border-2 p-1'>Category</button>

                </div>
                <div className='shopping'>
                    <p className='p-2'>
                        also Available On
                    </p>
                   <div className='brand-icons items-center md:flex gap-5'>
                   <img src='./image/amazon.png'alt='amazon-logo'></img>
                   <img src='./image/flipkart.png'alt='flipkard-logo'></img>
                    

                   </div>
                </div>
                
            </div>
            <div className='Hero-image '>
            <img src='./image/shoe_image.png'alt='Shoes-img'></img>
            </div>

           </div>

        </>




    )
}

export default Middle 