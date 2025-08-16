import React from 'react'
import Header from "../components/Header"
import ItemCard from '../components/ItemCard'
import {cardData} from "../components/Data"

const Search = () => {
  const ItemClickHandler = (e, item) => {
    if (e.target.closest(".slick-arrow")) {
      e.stopPropagation();
      return
    }
    confirm("Are you sure you want to view this item?");
  };
  return (
    <div>
        <Header/>
        <div className='max-w-[1200px] mx-auto flex gap-3'>
            <div className=' flex-4 p-3'>
                <h1 className='text-2xl mb-5'>Properties for sale in UAE</h1>
                <div className='flex flex-col gap-4'>
                  {cardData.length > 0 && cardData.map((item) => (
                    <ItemCard key={item.id} item={item} onClick={(e) => ItemClickHandler(e,item)} />
                  ))}
                </div>
            </div>
            <div className='bg-blue-100 flex-2'>hello2</div>
        </div>
    </div>
  )
}

export default Search