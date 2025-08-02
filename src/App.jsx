import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div>
      <div className='h-screen flex flex-col px-4'>
        <Header />
        <HeroSection />
      </div>
    </div>
  )
}

export default App