import React from 'react'
import { Carousel } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faEnvelope, faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const ItemCard = ({item}) => {
  return (
    <Link to={`/property/${item.id}`} state={{ item }} className='flex rounded-lg cursor-pointer bg-white border-1 border-gray-200 shadow-md'>
        {item.image && (
            <div>
                <Carousel arrows className='max-w-[300px]'>
                    {item.image.map((img, index) => (
                    <div key={index} className='w-full h-full'>
                        <img src={img} className='h-[210px] w-full brightness-75 rounded-bl-lg rounded-tl-lg' alt={`Property ${index + 1}`} />
                    </div>
                    ))}
                </Carousel>
          </div>
        )}
        <div className='flex-1 flex flex-col justify-between gap-2 p-3'>
            <h1 className='text-2xl font-semibold text-gray-800'><span className='text-[1rem]'>AED</span> {item?.price}</h1>
            <div className='flex items-center gap-2 text-[.9rem] text-gray-800 font-semibold'>
                <span className='pr-2 border-r-1 border-gray-300'>{item?.type}</span>
                <pre className='pr-2 border-r-1 border-gray-300'>
                     <FontAwesomeIcon icon={faBed} /> {item?.bed} <FontAwesomeIcon icon={faBath} /> {item?.bath} 
                </pre>
                <span>Area: <span className='font-normal'>{item?.area}</span></span>
            </div>
            <p className='text-[1rem] text-cyan-600'>{item?.heading}</p>
            <p className='text-[.9rem] text-gray-700'><FontAwesomeIcon icon={faLocationDot} /> {item?.location}</p>
            <div className='flex gap-2'>
                <Button label='Email' icon={<FontAwesomeIcon icon={faEnvelope} />} />
                <Button label='Call' icon={<FontAwesomeIcon icon={faPhone} />} />
                <Button icon={<FontAwesomeIcon size='lg' icon={faWhatsapp} />} />
            </div>
        </div>
    </Link>
  )
}

export default ItemCard