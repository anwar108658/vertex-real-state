import React from 'react'
import { Carousel } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faLocationDot } from '@fortawesome/free-solid-svg-icons';

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
      className=' bg-[#f1f8f7]'
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
          <p>{item.type}</p>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{item.location}</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='flex-1 text-center'><p>LaunchPrice</p><p>{item.launchPrice}</p></div>
            <div className='flex-1 text-center'><p>Handover</p><p>{item.Handover}</p></div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default CustomCarousel