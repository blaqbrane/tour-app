import React, { useState } from 'react'

const TourCard = ({id,image,name,info,price,DeleteTour}) => {
  const[isopen,setIsopen]=useState(false)
  return (
    <div className='mt-10 p-6'>
        <div className='relative'>
        <img src={image} alt="" className='relative w-full h-[300px] rounded-t md:w-[350px] md:h-[280px] object-cover'/>
        <h1 className='absolute top-0 right-0 bg-green-500 rounded-tr text-white px-2 py-1'>${price}</h1>
        </div>
        
        <div className=''> 
            <div>
                <h1 className='text-center font-semibold my-3'>{name}</h1>
            </div>
            <div className='max-w-sm text-[gray] text-sm'>
                {isopen ? info : `${info.substring(0, 180)}...`}
                <button className='text-green-500 text-sm' onClick={() => setIsopen(!isopen)}>{isopen ? "Show Less" : "Read More"}</button>
            </div>
            <button className='block w-full border text-sm py-1 text-green-500 rounded border-green-500 mt-5' onClick={() => DeleteTour(id)}>Not Interested</button>
        </div>
    </div>
  )
}

export default TourCard