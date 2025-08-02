import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import Segment from './Segment'

const HeroSection = () => {
  return (
    <div 
    className={`flex justify-center items-center bg-custom-hero flex-1 bg-amber-200 rounded-lg`}>
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className='text-white'>
                <h1 className='text-4xl font-bold'>Real homes live here</h1>
                <h2 className='text-xl font-semibold'>Real Prices. Real Photos. Real Properties.</h2>
            </div>
            <Segment/>
        </div>
    </div>
  )
}

export default HeroSection