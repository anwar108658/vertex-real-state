import { useEffect, useState } from 'react'

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
  
  if(options.length === 0) return null;

  return (
    <div className={` ${className} inline-flex bg-white flex-wrap justify-center items-center gap-2 border-1 border-gray-300 p-[2px] rounded-lg`}>
      {options.length > 0 && options.map(item => (
        <button key={item?.key} onClick={() => handleClick(item.key)} className={`${size === "lg" ? "!px-4 sm:p-2" : size === "md" ? "p-1 !px-4" : size === "sm" ? "!px-2" : size === "xs" ? "text-[.8rem] px-1" : ""} ${selectedVal === item?.key ? 'bg-blue-50 font-semibold rounded text-blue-500' : ''} py-1 flex-1 whitespace-nowrap  cursor-pointer flex gap-2 items-center justify-center`}>
          {item?.icon}
          {item?.value}
        </button>
      ))}
    </div>
  )
}

export default Segment