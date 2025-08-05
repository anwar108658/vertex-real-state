import React from 'react'
import { Carousel } from 'antd'

const CustomCarousel = () => {
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
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div key={num}>
          <div style={{ padding: '0 8px' }}>
            <h3 style={contentStyle}>{num}</h3>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default CustomCarousel