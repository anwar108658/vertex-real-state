import React from 'react'

const Button = ({ label, onClick, icon }) => {
  return (
    <button className='bg-blue-50 text-cyan-600 outline-0 font-semibold py-2 px-4 rounded cursor-pointer' onClick={onClick}>
      {icon && <span className='mr-1'>{icon}</span>}
      {label}
    </button>
  )
}

export default Button