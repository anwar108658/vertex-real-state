import React from 'react'
import Header from '../components/Header'
import {Link, useLocation} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare';
import Button from '../components/Button';

const Property = () => {
  const location = useLocation();
  const { item } = location.state || {};
    if (!item) {
        return <div className='h-[61vh] flex items-center justify-center text-gradient text-2xl font-semibold'>Property not found___<Link to="/search" className='font-normal text-blue-900 bg-blue-100 px-3 rounded-lg'>Go back</Link></div>;
    }
  return (

    <div className='max-w-[1200px] mx-auto'>
        <div className='h-[80vh] flex gap-3'>
            <div className='flex-5'><img className='w-full h-full object-cover hover:brightness-80 cursor-pointer brightness-90 rounded-lg' src={item?.image[0]} alt="im" /></div>
            <div className='flex-2 grid grid-rows-2 gap-3'>
                <div><img className='w-full h-full object-cover hover:brightness-80 cursor-pointer brightness-90 rounded-lg' src={item?.image[1]} alt="" /></div>
                <div className='  grid  grid-rows-2 gap-3'>
                    <img className='w-full h-full object-cover hover:brightness-80 cursor-pointer brightness-90 object-center rounded-lg' src={item?.image[2]} alt="" />
                    <img className='w-full h-full object-cover hover:brightness-80 cursor-pointer brightness-90 object-center rounded-lg' src={item?.image[3]} alt="" />
                </div>
            </div>
        </div>
        <div className='flex gap-3 mt-5'>
            <div className='flex-5 flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl font-[400] text-gray-800'><span className='text-[1.2rem]'>AED</span> {item?.price}</h1>
                    <div className='flex gap-2'>
                        <Button label='Save' icon={<FontAwesomeIcon icon={faHeart} />} />
                        <Button label='Share' icon={<FontAwesomeIcon icon={faShare} />} />
                    </div>
                </div>
                <h1 className='text-[1.2rem] font-semibold'>{item?.location}</h1>
                <div className='flex items-center gap-2 text-[1.1rem] text-gray-800 '>
                    <pre className='pr-2 border-r-1 border-gray-300'>
                            <FontAwesomeIcon icon={faBed} /> {item?.bed} <FontAwesomeIcon icon={faBath} /> {item?.bath} 
                    </pre>
                    <span>Area: <span className='font-normal'>{item?.area}</span></span>
                </div>
                <h1 className='text-[1.2rem] font-semibold'>{item?.heading}</h1>
                <p className='text-gray-800 text-[1rem] mt-2'>{item?.paragraph}</p>
            </div>
            <div className='flex-2 min-w-[300px] bg-blue-100'></div>
        </div>
    </div>
  )
}

export default Property