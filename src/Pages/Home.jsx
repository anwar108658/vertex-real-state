import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Carousel from '../components/CustomCarousel'
import { Avatar, Tooltip } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faArrowRightArrowLeft, faCirclePlay, faUser } from '@fortawesome/free-solid-svg-icons'
import car from "../assets/card/car.svg"
import map from "../assets/card/map.svg"
import Building from "../assets/card/building.svg"
import Segment from '../components/Segment'
import {cardCarousel} from "../components/Data"

const Home = () => {
  const CityNames = [{key:"dubai",value:"Dubai"},{key:"abudhabi",value:"Abu Dhabi"},{key:"sharjah",value:"Sharjah"},{key:"ajman",value:"Ajman"},{key:"rasalkhaimah",value:"Ras Al Khaimah"},{key:"ummalquwain",value:"Umm Al Quwain"}]
  const cards = [
    {heading:"TruEstimate™",paragraph:"Find out how much your property is worth>",img:Building},
    {heading:"TruBuilding™",paragraph:"Find homes by drive time>",img:car},
    {heading:"Map View",paragraph:"Search for properties in preferred areas using a map>",img:map},
  ]
  return (
    <div>

      <HeroSection />

      <main className="xl:px-20">
        <section>
          <div className='step-gradient flex-col sm:flex-row gap-3 my-10 lg:my-15 rounded-2xl flex justify-between items-center p-4 text-white'>
            <div className='flex flex-col sm:flex-row items-center gap-5'>
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
            <button className=' bg-white text-blue-500 font-semibold p-2 px-3 rounded-lg shadow-lg cursor-pointer whitespace-nowrap flex items-center gap-2 hover:gap-3.5 transition-all duration-300'>
              <span>Find My Agent</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-10 border-b-1 border-gray-300'>
              {cards.map((card, index) => (
                <div key={index} style={{ backgroundImage: `url(${card.img})`, backgroundSize: "70% 100%" }} className={`h-[170px] sm:h-[250px] md:h-[300px] bg-right bg-no-repeat bg-blue-100  text-shadow-[0_2px_4px_rgba(0,0,0,0.5)] p-5 rounded-lg shadow-lg flex flex-col  gap-3 `}>
                  <h3 className='text-2xl font-semibold text-gray-800'>{card.heading}</h3>
                  <p className='max-w-[200px] text-[1.1rem]'>{card.paragraph}</p>
                </div>
              ))}
            </div>
        </section>
        <section className='sec-2'>
          <div className='flex flex-col gap-8 my-10 items-center'>
            <h1 className='text-3xl font-semibold'>Browse New Projects in the UAE</h1>
            <Segment options={CityNames} size="lg"/>
          </div>
          <Carousel items={cardCarousel} />
        </section>
      </main>
      
    </div>
  )
}

export default Home