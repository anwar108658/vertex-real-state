import React from 'react'
import { Carousel } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faEnvelope, faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const ItemCard = ({item}) => {
    const [width,setWidth] = React.useState(0);
    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth <= 640 ? window.innerWidth : 350);
        setWidth(window.innerWidth <= 640 ? window.innerWidth : 350);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <Link to={`/property/${item.id}`} state={{ item }} className='flex flex-col sm:flex-row rounded-lg  cursor-pointer bg-white border-1 border-gray-200 shadow-md'>
        {item.image && (
            <Carousel arrows  style={{ width: `${width-50}px` }}>
                {item.image.map((img, index) => (
                    <img src={img} key={index} className='h-[260px] brightness-75 rounded-lg rounded-bl-lg rounded-tl-lg' alt={`Property ${index + 1}`} />
                ))}
            </Carousel>
        )}
        <div className='flex-1 flex flex-col justify-between gap-2 p-3'>
            <h1 className='text-2xl font-semibold text-gray-800'><span className='text-[1rem]'>AED</span> {item?.price}</h1>
            <div className='flex flex-nowrap overflow-hidden items-center gap-2 text-[.9rem] text-gray-800 font-semibold '>
                <span className='pr-2 border-r-1 border-gray-300'>{item?.type}</span>
                <pre className='pr-2 border-r-1 border-gray-300'>
                     <FontAwesomeIcon icon={faBed} /> {item?.bed} <FontAwesomeIcon icon={faBath} /> {item?.bath} 
                </pre>
                <span className='line-clamp-1'>Area: <span className='font-normal'>{item?.area}</span></span>
            </div>
            <p className='text-[1rem] text-cyan-600 line-clamp-1'>{item?.heading}</p>
            <p className='text-[.9rem] text-gray-700 line-clamp-1'><FontAwesomeIcon icon={faLocationDot} /> {item?.location}</p>
            <div className='flex gap-2 flex-wrap'>
                <Button label='Email' icon={<FontAwesomeIcon icon={faEnvelope} />} />
                <Button label='Call' icon={<FontAwesomeIcon icon={faPhone} />} />
                <Button icon={<FontAwesomeIcon size='lg' icon={faWhatsapp} />} />
            </div>
        </div>
    </Link>
  )
}

export default ItemCard