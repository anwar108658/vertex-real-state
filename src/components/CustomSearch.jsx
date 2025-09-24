import React, { useState } from 'react'
import Segment from './Segment'
import { Button,  Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCaretDown, faHouseSignal, faLocationDot,  } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from "react-router-dom"
import {multiSearch} from "./Data"

const CustomSearch = () => {
    const [searchData, setSearchData] = useState({option:multiSearch[0]?.option?.[0]?.key});
    const navigate = useNavigate();
    const [selected, setSelected] = useState("property");

  return (
    <>

    <Segment options={multiSearch} values={e => setSelected(e)} size="lg"/>

    <div className='w-full flex flex-col gap-4 bg-white rounded-lg'>
          {multiSearch.length > 0 && multiSearch.map((item) => {
            if(item.key === selected) {
                
              return (
                <>
                  <div className='flex flex-col sm:flex-row gap-2  rounded-lg px-3 pt-3'>
                    <Segment options={item?.option} values={(e) => setSearchData({...searchData, option: e})} />
                    <div className=' flex-4 bg-white p-2 rounded-lg border-gray-300 border-1 flex items-center gap-2'>
                      <FontAwesomeIcon icon={faLocationDot} className='text-blue-400' size='lg' />
                      <Select
                        className="w-full"
                        variant='borderless'
                        size='small'
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
                  <div className=' gap-3 px-3 grid  grid-cols-[repeat(auto-fill,minmax(180px,1fr))]'>
                    {searchData.option !== "rent" ? <Segment options={item?.option2} size='xs' className='flex-1'/>:
                    <Button  variant='filled' size='large' color='default' className=' !justify-between !bg-white !text-gray-900 !border-gray-300 border-2' icon={<FontAwesomeIcon className='!text-gray-500' icon={faCaretDown} />} iconPosition='end'>Yearly</Button>}
                    <Button  variant='filled' size='large' color='default' className=' !justify-between !bg-white !text-gray-900 !border-gray-300 border-2' icon={<FontAwesomeIcon className='!text-gray-500' icon={faCaretDown} />} iconPosition='end'>Residential</Button>
                    <Button  variant='filled'  size='large' color='default' className='  !justify-between !bg-white !text-gray-900 !border-gray-300 border-2' icon={<FontAwesomeIcon className='!text-gray-500' icon={faCaretDown} />} iconPosition='end'>Beds & Baths</Button>
                    <Button  variant='filled'  size='large' color='default' className=' !justify-between !bg-white !text-gray-900 !border-gray-300 border-2' icon={<FontAwesomeIcon className='!text-gray-500' icon={faCaretDown} />} iconPosition='end'>Price (AED)</Button>
                  </div>
                </>
              )
            }
          })}

          <div className='flex flex-col sm:flex-row gap-3 justify-between bg-blue-100 p-3 rounded-br-lg rounded-bl-lg'>
            <div className='flex items-center gap-2 text-sm'>
              <FontAwesomeIcon icon={faHouseSignal} className='text-blue-400' size='lg' />
              <p>Want to find out more about UAE real estate using AI?</p>
            </div>
            <button className='cursor-pointer p-1 text-right font-semibold whitespace-nowrap text-gradient'>
                Try VertexGPT <FontAwesomeIcon icon={faArrowRight} className='text-blue-400' />
            </button>
          </div>
    </div>
    </>
  )
}

export default CustomSearch