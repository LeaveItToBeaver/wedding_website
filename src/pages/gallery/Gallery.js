import React from 'react'
import Carousel, { CarouselItem } from '../../components/carousel/Carousel'
import img1 from "../../assets/engagement_photos/IMG1.jpg"
import img2 from "../../assets/engagement_photos/IMG2.jpg"
import img3 from "../../assets/engagement_photos/IMG3.jpg"
import img4 from "../../assets/engagement_photos/IMG5.jpg"
import img5 from "../../assets/engagement_photos/IMG6.jpg"
import "../gallery/Gallery.css"

export default function Gallery() {
  return (
      <div className='carousel-gallery'>
        <Carousel>
          <CarouselItem>< img src={img1} className='engagement-image'/></CarouselItem>
          <CarouselItem>< img src={img2} className='engagement-image'/></CarouselItem>
          <CarouselItem>< img src={img3} className='engagement-image'/></CarouselItem>
          <CarouselItem>< img src={img4} className='engagement-image'/></CarouselItem>
          <CarouselItem>< img src={img5} className='engagement-image'/></CarouselItem>
        </Carousel>
      </div>
  )
}
