import React from 'react';
import './Carousel.css'

const CarouselCard = ({item}) => {
  return (
    <div className='carouse-card-image'>
        <div className='carousel-card-country '>
            <h2>{item.state}</h2>
            <h4>{item.country}</h4>
        </div>
    </div>
  )
}

export default CarouselCard