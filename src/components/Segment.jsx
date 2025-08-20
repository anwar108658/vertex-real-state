import { Select } from 'antd';
import React, { use, useEffect, useState } from 'react'

const Segment = ({values,options=[],size="md",className=""}) => {
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
    <div className={`${className} inline-flex  bg-white flex-wrap justify-center items-center gap-2 border-1 border-gray-300 p-1 rounded-lg`}>
      {options && options.map(item => (
        <button key={item?.key} onClick={() => handleClick(item.key)} className={`${size === "lg" ? "p-2" : size === "md" ? "p-1" : size === "sm" ? "p-0 " : ""} ${selectedVal === item?.key ? 'bg-blue-50 font-semibold rounded text-blue-500' : ''} flex-1 whitespace-nowrap px-4 cursor-pointer flex gap-2 items-center justify-center`}>
          {item?.icon}
          {item?.value}
        </button>
      ))}
    </div>
  )
}

export default Segment