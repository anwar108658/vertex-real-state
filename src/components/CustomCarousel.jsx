import React from 'react'
import { Carousel } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
      infinite={false}
      slidesToShow={3.5} 
      cssEase='linear' // Smooth transition
      centerPadding='60px' // Padding for center mode
      touchMove={true} // Enable touch move
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
        <div key={item.id} className='!flex !flex-col gap-2 p-2  shadow-xl rounded-lg'>
          <img src={item.img} className='w-full aspect-[1.5] brightness-70 rounded-lg'/>
          <h3 className='font-semibold text-[1.1rem]'>{item.BuildingName}</h3>
          <p>{item.type}</p>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{item.location}</span>
          </div>
          <div className='flex items-center gap-2 bg-blue-50 p-2 rounded-md'>
            <div className='flex-1 text-center border-r-1 border-gray-300'><p>LaunchPrice</p><p className='font-semibold text-blue-500 text-[1rem]'>{item.launchPrice}</p></div>
            <div className='flex-1 text-center'><p>Handover</p><p className='font-semibold text-blue-500 text-[1rem]'>{item.Handover}</p></div>
          </div>
          <button className='flex items-center justify-center gap-2 text-[1rem] font-semibold text-green-800 bg-green-100 p-2 rounded-md'>
            <FontAwesomeIcon icon={faWhatsapp} size='lg'/>
            <p>WhatsApp</p>
          </button>
        </div>
      ))}
    </Carousel>
  )
}

export default CustomCarousel