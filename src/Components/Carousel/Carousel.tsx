import React, { useEffect, useRef } from 'react'
import CarouselCard from './CarouselCard';
import './Carousel.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Carousel = ({items}) => {

    const boxRef = useRef(null)
    useEffect(()=>{

        console.log(boxRef.current.clientWidth);
    }, [])
    
    function scrollRight(){
        boxRef.current.scrollLeft = boxRef.current.scrollLeft + 50
    }

    function scrollLeft(){
        boxRef.current.scrollLeft = boxRef.current.scrollLeft - 50
    }
    
    

  return (
    <div style={{display: 'flex'}}>
        <div className='carousel-card-arrow' onClick={scrollLeft}>
            <div className='carousel-card-arrow-background'>
                <ChevronLeftIcon />
            </div>
        </div>
        <div className='carousel-container' ref={boxRef}>
        {
            items?.map((item, idx)=>{
                return <CarouselCard key={idx} item={item} />
            })
        }
        </div>
        <div className='carousel-card-arrow' onClick={scrollRight}>
            <div className='carousel-card-arrow-background'>
                <ChevronRightIcon />
            </div>
        </div>
    </div>
  )
}

export default Carousel;