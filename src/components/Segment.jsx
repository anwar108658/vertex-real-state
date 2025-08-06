import { Select } from 'antd';
import React, { use, useEffect, useState } from 'react'

const Segment = ({values,options,size}) => {
  const [selectedVal, setSelectedVal] = useState(options[0]?.key);
  
  // Function to handle button click
  useEffect(() => {
    if (values && options.length > 0) {
      values(options[0].key);
    }
  }, []);

  const handleClick = (e) => {
    setSelectedVal(e);
    if (e && values) {
      values(e);
    }
  }
  
  return (
    <div className='inline-flex bg-white flex-wrap justify-center items-center gap-2 border-1 border-gray-300 p-1 rounded-lg '>
      {options && options.map(item => (
        <button key={item?.key} onClick={() => handleClick(item.key)} className={`${size === "large"?"p-2":"p-1"} flex-1 whitespace-nowrap px-4 cursor-pointer ${selectedVal === item?.key ? 'bg-blue-100 font-semibold rounded text-blue-500' : ''}`}>
          {item?.value}
        </button>
      ))}
    </div>
  )
}

export default Segment