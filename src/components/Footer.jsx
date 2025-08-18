import { faArrowRightArrowLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/logo.png'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[length:30px_30px] px-5 bg-[url("https://static.bayut.com/assets/iconFooterBackground_noinline.f1ca6d821e6f9e0dea6dfe4e3f81d9f3.svg")] py-10 text-white mt-10'>
        <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
          <div className='flex items-center'>
            <img src={logo} className='w-15' alt="Logo" />
            <span className='text-2xl font-bold ml-2 text-gradient'>Real Estate</span>
          </div>
          <div className='flex items-center gap-5'>
            <span>© 2023 Vertex Property. All rights reserved.</span>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            <FontAwesomeIcon icon={faCirclePlay} />
          </div>
        </div>
    </footer>
  )
}

export default Footer