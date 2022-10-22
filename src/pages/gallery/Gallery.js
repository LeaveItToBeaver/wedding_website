import React from 'react'
import Carousel, { CarouselItem } from '../../components/carousel/Carousel'
import "../gallery/Gallery.css"

export default function Gallery() {
  return (
      <div className='carousel-gallery'>
        <Carousel>
          <CarouselItem> Test </CarouselItem>
          <CarouselItem> Test 1 </CarouselItem>
          <CarouselItem> Test 2 </CarouselItem>
          <CarouselItem> Test 3 </CarouselItem>
          <CarouselItem> Test 4 </CarouselItem>
        </Carousel>
      </div>
  )
}
