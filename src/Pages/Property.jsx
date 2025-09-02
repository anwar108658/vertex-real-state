import React, { use, useEffect } from 'react'
import Header from '../components/Header'
import {Link, useLocation} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faEnvelope, faHeart, faImage, faLocationDot, faMap, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare';
import Button from '../components/Button';
import Segment from '../components/Segment';
import Avatar from 'antd/es/avatar/Avatar';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Image } from 'antd';

const Property = () => {
    const location = useLocation();
    const { item } = location.state || {};
    const [popupOpen, setPopupOpen] = React.useState(false);
    const popup = [{key: 'photos', value:`Photos (${item?.image?.length})`,icon:<FontAwesomeIcon icon={faImage} />},{key: 'map', value:'Map',icon:<FontAwesomeIcon icon={faLocationDot} />}];
    if (!item) {
        return <div className='h-[61vh] flex items-center justify-center text-gradient text-2xl font-semibold'>Property not found___<Link to="/search" className='font-normal text-blue-900 bg-blue-100 px-3 rounded-lg'>Go back</Link></div>;
    }

    if (popupOpen) {
        document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'auto';

  return (
    <>
        <div className=' py-4 xl:px-20 !overflow-hidden scrollbar-hide'>
            <div className='max-w-[1200px] h-[80vh] flex gap-3'>
                <div className='flex-3 sm:flex-4 md:flex-5'><img className='w-full h-full object-cover hover:brightness-90 cursor-pointer rounded-lg' onClick={() => setPopupOpen(true)} src={item?.image[0]} alt="im" /></div>
                <div className='flex-2 grid grid-rows-2 gap-3'>
                    <div><img className='w-full h-full object-cover hover:brightness-90 cursor-pointer rounded-lg' onClick={() => setPopupOpen(true)} src={item?.image[1]} alt="" /></div>
                    <div className='  grid  grid-rows-2 gap-3'>
                        <img className='w-full h-full object-cover hover:brightness-90 cursor-pointer object-center rounded-lg' onClick={() => setPopupOpen(true)} src={item?.image[2]} alt="" />
                        <img className='w-full h-full object-cover hover:brightness-90 cursor-pointer object-center rounded-lg' onClick={() => setPopupOpen(true)} src={item?.image[3]} alt="" />
                    </div>
                </div>
            </div>

            <div className='flex gap-3 mt-5'>
                <div className='flex-5 flex flex-col gap-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl font-[400] text-gray-800'><span className='text-[1.2rem]'>AED</span> {item?.price}</h1>
                        <div className='flex gap-2'>
                            <Button label='Save' icon={<FontAwesomeIcon icon={faHeart} />} />
                            <Button label='Share' icon={<FontAwesomeIcon icon={faShare} />} />
                        </div>
                    </div>
                    <h1 className='text-[1.2rem] font-semibold'>{item?.location}</h1>
                    <div className='flex items-center gap-2 text-[1.1rem] text-gray-800 '>
                        <pre className='pr-2 border-r-1 border-gray-300'>
                                <FontAwesomeIcon icon={faBed} /> {item?.bed} <FontAwesomeIcon icon={faBath} /> {item?.bath} 
                        </pre>
                        <span>Area: <span className='font-normal'>{item?.area}</span></span>
                    </div>
                    <h1 className='text-[1.2rem] font-semibold'>{item?.heading}</h1>
                    <p className='text-gray-800 text-[1rem] mt-2'>{item?.paragraph}</p>
                </div>
                <div className='hidden lg:block flex-2 min-w-[300px] bg-blue-100'></div>
            </div>
        </div>

        <div onClick={() => setPopupOpen(false)} className={`${popupOpen ? "flex":"hidden"} w-full h-screen bg-black/60 backdrop-blur-sm fixed top-0 left-0 z-50  items-center justify-center ${popupOpen ? 'block' : 'hidden'}`}>
            <div onClick={(e) => e.stopPropagation()} className='relative w-full max-w-4/6 h-[85vh] flex flex-col gap-3 p-5 px-7 bg-white rounded-lg'>
                <button onClick={() => setPopupOpen(false)} className='absolute text-[1rem] flex items-center top-2 right-2 cursor-pointer'>
                    <FontAwesomeIcon size='md' color='red' icon={faXmark}/>
                </button>
                <Segment size='md' className='w-full' options={popup}/>
                <div className='flex-1 grid grid-cols-2 gap-3 overflow-auto'>
                <Image.PreviewGroup
                items={item.image} // 👈 array of images
                width={1000}
                preview={{width: '800', height: '800px',minScale: 0.1,maxScale: 2,className:"scroll-y-hidden bg-linear",wrapStyle: {overflow: 'hidden'},maskAnimation: {show: true}}}
                >
                {item.image.map((img, index) => (
                    <Image
                    key={index}
                    src={img}
                    alt={`Image ${index}`}
                    className="w-full !h-[60vh] cursor-pointer rounded-lg"
                    />
                ))}
                </Image.PreviewGroup>

                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <Avatar  className='!w-15 !h-15' src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" />
                        <h4 className='text-[1rem] font-semibold'>Listing by <span className='text-blue-500'> Aftab Ahmad</span></h4>
                    </div>
                    <div className='flex gap-2'>
                        <Button label='Email' icon={<FontAwesomeIcon icon={faEnvelope} />} />
                        <Button label='Call' icon={<FontAwesomeIcon icon={faPhone} />} />
                        <Button icon={<FontAwesomeIcon size='lg' icon={faWhatsapp} />} />
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Property