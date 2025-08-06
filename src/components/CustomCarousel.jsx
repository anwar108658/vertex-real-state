import React from 'react'
import { Carousel } from 'antd'

const CustomCarousel = ({items}) => {
  const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
  return (
 <Carousel
      arrows
      infinite={true}
      slidesToShow={3} 
      centerMode
      cssEase='linear' // Smooth transition
      className=' bg-blue-400'
      centerPadding='260px' // Padding for center mode
      touchMove={true} // Enable touch move
      swipeToSlide={true} // Enable swipe to slide
      slidesToScroll={1} // Scroll 1 at a time
      dots={true} // Show dots for navigation
      pauseOnDotsHover={true} // Pause on hover
      dotPosition='bottom' // Position of dots
  
      responsive={[
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
      ]}
    >
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="" />
          <h3></h3>
          <span>{item.type}</span>
        </div>
      ))}
    </Carousel>
  )
}

export default CustomCarousel