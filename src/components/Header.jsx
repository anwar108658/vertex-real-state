import React, { use, useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Drawer, Dropdown, Space} from 'antd'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuItems = [
    {
        label: 'Area Guides',
        key: 'Area Guides',
        className:"!text-[1rem] !text-teal-700"
    },
    {
        label: 'Building Guides',
        key: 'Building Guides',
        className:"!text-[1rem] !text-teal-700"
    },
    {
        label: 'School Guides',
        key: 'School Guides',
        className:"!text-[1rem] !text-teal-700"
    },
    {
        label: 'School Guides',
        key: 'School Guide',
        className:"!text-[1rem] !text-teal-700"
    },
];


const Header = () => {
    const [drawer, setDrawer] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
        <header className='flex justify-between items-center p-4'>
            <Link className='flex items-center' to="/">
                <img src={logo} className='w-15' alt="Logo" />
                <span className='text-2xl font-bold ml-2 text-gradient'>Real Estate</span>
            </Link>
            {!isMobile ? <nav>
                <ul className='flex space-x-4 cursor-pointer text-gray-600'>
                    <li className='hover:text-blue-500'>Find my Agent</li>
                    <li className='hover:text-blue-500'>Floor Plans</li>
                    <Dropdown menu={{ items: MenuItems}} trigger={['click']}>
                        <Space className='flex items-center hover:text-[#05bef7] cursor-pointer'>
                            Guides
                            <span className=' text-[.6rem]'>▼</span>
                        </Space>
                    </Dropdown>
                    <Dropdown menu={{ items: MenuItems}} trigger={['click']}>
                        <Space className='flex items-center hover:text-[#05bef7] cursor-pointer'>
                            Market Intelligence
                            <span className=' text-[.6rem]'>▼</span>
                        </Space>
                    </Dropdown>
                    <li className='hover:text-blue-500'>Agent Portal</li>
                    <Dropdown menu={{ items: MenuItems}} trigger={['click']}>
                        <Space className='flex items-center hover:text-[#05bef7] cursor-pointer'>
                            Events
                            <span className=' text-[.6rem]'>▼</span>
                        </Space>
                    </Dropdown>
                </ul>
            </nav>:
                <button onClick={() => setDrawer(true)} className='text-[1.1rem] font-bold ml-2 text-blue-500'>
                    <FontAwesomeIcon icon={faBars} size='lg' />
                </button>
            }
        </header>
        <Drawer open={drawer} onClose={() => setDrawer(false)}>
            <nav>
                <ul className='flex flex-col gap-5 cursor-pointer text-[1.1rem] text-gray-600'>
                    <li className='hover:text-blue-500'>Find my Agent</li>
                    <li className='hover:text-blue-500'>Floor Plans</li>
                    <Dropdown menu={{ items: MenuItems}} trigger={['click']}>
                        <Space className='flex items-center hover:text-[#05bef7] cursor-pointer'>
                            Guides
                            <span className=' text-[.6rem]'>▼</span>
                        </Space>
                    </Dropdown>
                    <Dropdown menu={{ items: MenuItems}} trigger={['click']}>
                        <Space className='flex items-center hover:text-[#05bef7] cursor-pointer'>
                            Market Intelligence
                            <span className=' text-[.6rem]'>▼</span>
                        </Space>
                    </Dropdown>
                    <li className='hover:text-blue-500'>Agent Portal</li>
                    <Dropdown menu={{ items: MenuItems}} trigger={['click']}>
                        <Space className='flex items-center hover:text-[#05bef7] cursor-pointer'>
                            Events
                            <span className=' text-[.6rem]'>▼</span>
                        </Space>
                    </Dropdown>
                </ul>
            </nav>
        </Drawer>
    </>
  )
}

export default Header