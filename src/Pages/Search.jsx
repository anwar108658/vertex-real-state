import React from 'react'
import Header from "../components/Header"
import ItemCard from '../components/ItemCard'
import {cardData} from "../components/Data"

const Search = () => {
  
  return (
    <div className='max-w-[1200px] mx-auto flex gap-3'>
        <div className=' flex-4 p-3'>
            <h1 className='text-2xl mb-5'>Properties for sale in UAE</h1>
            <div className='flex flex-col gap-4'>
              {cardData.length > 0 && cardData.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </div>
        </div>
        <div className='bg-blue-100 flex-2'>
          <div className='relative h-[250vh] bg-blue-50'><img src='https://img.pikbest.com/origin/06/18/26/91UpIkbEsTTIr.jpg!bw700' className='h-[70vh] sticky top-0' alt="" /></div>
          <div className='relative h-[200vh] bg-amber-100'><img src='https://tpc.googlesyndication.com/simgad/12874441518433338950' className='w-full  h-[80vh] sticky top-0' alt="" /></div>
        </div>
    </div>
  )
}

export default Search