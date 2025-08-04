import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import Segment from './Segment'
import { Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {
  const data = [{key:"property",value:"Property"}, {key:"realEstate",value:"Real Estate"}, {key:"homes",value:"Homes"}]
  const search1Data = [{key:"rent",value:"Rent"}, {key:"buy",value:"Buy"}]
  return (
    <div 
    className={`flex justify-center items-center bg-custom-hero flex-1 bg-amber-200 rounded-lg`}>
      <div className='max-w-[800px] w-full flex flex-col items-center justify-center gap-4'>
        <div className='text-white'>
            <h1 className='text-4xl font-bold'>Real homes live here</h1>
            <h2 className='text-xl font-semibold'>Real Prices. Real Photos. Real Properties.</h2>
        </div>
        <Segment options={data} size="large"/>
        <div className='w-full'>
          <div className='flex gap-2 bg-white p-3 rounded-lg shadow-lg'>
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
            <button className=' flex-1 bg-blue-500 text-white p-2 px-3 rounded-lg shadow-lg cursor-pointer '>Search</button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection