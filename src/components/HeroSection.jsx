import React, { useState } from 'react'
import Segment from './Segment'
import { Button,  Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCaretDown, faCirclePlay, faHouseSignal, faLocationDot,  } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom"

const HeroSection = () => {
  const navigate = useNavigate();
  const data = [{key:"property",value:"Property"},{key:"Newproj",value:"New Project"},{key:"transaction",value:"Transaction"}, {key:"trueEstimate",value:"True Estimate"}, {key:"agent",value:"Agent"}]
  const search1Data = [{key:"rent",value:"Rent"}, {key:"buy",value:"Buy"}]
  return (
    <div 
    className={`bg-custom-hero flex justify-center items-center  flex-1 rounded-lg`}>
      <div className='max-w-[800px] h-screen w-full flex flex-col items-center justify-center gap-6'>

        <div className='text-white backdrop-blur-sm '>
            <h1 className='text-4xl font-bold'>Real homes live here</h1>
            <h2 className='text-xl font-semibold'>Real Prices. Real Photos. Real Properties.</h2>
        </div>

        <Segment options={data} size="lg"/>

        <div className='w-full flex flex-col gap-4 bg-white rounded-lg'>
          <div className='flex gap-2  rounded-lg px-3 pt-3'>
            <Segment options={search1Data} />
            <div className=' flex-4 bg-white p-1 rounded-lg border-gray-300 border-1 flex items-center gap-2'>
              <FontAwesomeIcon icon={faLocationDot} className='text-blue-400' size='lg' />
              <Select
                className="w-full"
                variant='borderless'
                showSearch={true}
                onChange={(value) => console.log(value)}
                allowClear={true}
                placeholder="select a person"
                optionFilterProp="label"
                options={[
                  {
                    value: 'jack',
                    label: 'Jack',
                  },
                  {
                    value: 'lucy',
                    label: 'Lucy',
                  },
                  {
                    value: 'tom',
                    label: 'Tom',
                  },
                ]}
              />
            </div>
            <button onClick={() => navigate('/search')} className=' flex-1 bg-blue-500 text-white p-2 px-3 rounded-lg shadow-lg cursor-pointer '>Search</button>
          </div>
          <div className='flex gap-3 px-3'>
            <Button  variant='filled' ghost size='large' color='default' className='flex-1  !justify-between !bg-white !text-gray-900 !border-gray-300 border-2' icon={<FontAwesomeIcon className='!text-gray-500' icon={faCaretDown} />} iconPosition='end'>Yearly</Button>
            <Button  variant='filled' ghost size='large' color='default' className='flex-1  !justify-between !bg-white !text-gray-900 !border-gray-300 border-2' icon={<FontAwesomeIcon className='!text-gray-500' icon={faCaretDown} />} iconPosition='end'>Residential</Button>
            <Button  variant='filled' ghost size='large' color='default' className='flex-1  !justify-between !bg-white !text-gray-900 !border-gray-300 border-2' icon={<FontAwesomeIcon className='!text-gray-500' icon={faCaretDown} />} iconPosition='end'>Beds & Baths</Button>
            <Button  variant='filled' ghost size='large' color='default' className='flex-1  !justify-between !bg-white !text-gray-900 !border-gray-300 border-2' icon={<FontAwesomeIcon className='!text-gray-500' icon={faCaretDown} />} iconPosition='end'>Price (AED)</Button>
          </div>
          <div className='flex justify-between bg-blue-100 p-3 rounded-br-lg rounded-bl-lg'>
            <div className='flex items-center gap-2 text-sm'>
              <FontAwesomeIcon icon={faHouseSignal} className='text-blue-400' size='lg' />
              <p>Want to find out more about UAE real estate using AI?</p>
            </div>
            <button className='cursor-pointer font-semibold text-gradient'>
                Try VertexGPT <FontAwesomeIcon icon={faArrowRight} className='text-blue-400' />
            </button>
          </div>
        </div>

        <button className="mt-6 flex items-center gap-2 border-1 border-white text-white bg-transparent px-4 py-2 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faCirclePlay}  size="lg" />
          <span>Experience the journey</span>
        </button>
      </div>
    </div>
  )
}

export default HeroSection