import React from 'react'
import Slider from "react-slick";

const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <div>
        <div>
            {/* Hero section */}
            <Slider>

            </Slider>
        </div>
    </div>
  )
}

export default Hero