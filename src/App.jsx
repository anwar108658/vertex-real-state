import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Carousel from './components/CustomCarousel'
import { Avatar, Tooltip } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faArrowRightArrowLeft, faCirclePlay, faUser } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div>
      <div className='h-screen flex flex-col px-4'>
        <Header />
        <HeroSection />
      </div>
      <main className="px-20">
        <section>
          <div className='step-gradient my-15 rounded-2xl flex justify-between items-center p-4 text-white'>
            <div className='flex items-center gap-5'>
              <Avatar.Group>
                <Avatar size="large" src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                <Avatar size="large" style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar size="large" style={{ backgroundColor: '#87d068' }} icon={<FontAwesomeIcon icon={faUser} />} />
                </Tooltip>
                <Avatar size="large" src="https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/0c3fcefb-bc28-4af6-985e-0c3b499ae832/Elon_Musk_Royal_Society.jpg?fm=jpg&auto=format" >A</Avatar>
              </Avatar.Group>
              <div>
                <h2 className='font-semibold text-[1.2rem]'>Find a TruBroker™</h2>
                <p>Find trusted agents awarded for their excellent performance</p>
              </div>
            </div>
            <button className=' bg-white text-blue-500 font-semibold p-2 px-3 rounded-lg shadow-lg cursor-pointer flex items-center gap-2 hover:gap-3.5 transition-all duration-300'>
              <span>Find My Agent</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </section>
      </main>
        <Carousel/>
    </div>
  )
}

export default App