import React from 'react'
import logo from '../assets/logo.png'
import { Dropdown, Space} from 'antd'

const MenuItems = [
    {
        label: 'Area Guides',
        key: 'Area Guides',
    },
    {
        label: 'Building Guides',
        key: 'Building Guides',
    },
    {
        label: 'School Guides',
        key: 'School Guides',
    },
    {
        label: 'School Guides',
        key: 'School Guide',
    },
];

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <img src={logo} className='w-15' alt="Logo" />
            <span className='text-2xl font-bold ml-2 text-transparent  bg-clip-text bg-gradient-to-r from-[#576B78] to-[#05bef7]'>Real Estate</span>
        </div>
        <nav>
            <ul className='flex space-x-4 cursor-pointer text-gray-600'>
                <li className='hover:text-blue-500'>Find my Agent</li>
                <li className='hover:text-blue-500'>Floor Plans</li>
                <Dropdown menu={{ items: MenuItems ,className:""}} trigger={['click']}>
                    <Space className='flex items-center hover:text-[#05bef7] cursor-pointer'>
                        Guides
                        <span className=' text-[.6rem]'>▼</span>
                    </Space>
                </Dropdown>
                <Dropdown menu={{ items: MenuItems ,className:""}} trigger={['click']}>
                    <Space className='flex items-center hover:text-[#05bef7] cursor-pointer'>
                        Market Intelligence
                        <span className=' text-[.6rem]'>▼</span>
                    </Space>
                </Dropdown>
                <li className='hover:text-blue-500'>Agent Portal</li>
                <Dropdown menu={{ items: MenuItems ,className:""}} trigger={['click']}>
                    <Space className='flex items-center hover:text-[#05bef7] cursor-pointer'>
                        Events
                        <span className=' text-[.6rem]'>▼</span>
                    </Space>
                </Dropdown>
            </ul>
        </nav>
    </div>
  )
}

export default Header