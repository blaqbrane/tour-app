import React from 'react'
import TourCard from './TourCard'

const Tours = ({tours,DeleteTour}) => {
  return (
    <div className='grid md:grid-cols-3'>
        {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} DeleteTour={DeleteTour}/>
        ))}
    </div>
  )
}

export default Tours