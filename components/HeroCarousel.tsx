"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
  { imgUrl: '/assets/images/banner7.png', alt: 'chair' },
  { imgUrl: '/assets/images/banner2.png', alt: 'bag' },
  { imgUrl: '/assets/images/banner3.png', alt: 'lamp' },
  { imgUrl: '/assets/images/banner4.png', alt: 'air fryer' },
  { imgUrl: '/assets/images/banner5.png', alt: 'chair' },
  { imgUrl: '/assets/images/banner1.png', alt: 'smartwatch' }
]

const HeroCarousel = () => {
  return (
    <div className="hero-carousel ">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>

      <Image
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  )
}

export default HeroCarousel