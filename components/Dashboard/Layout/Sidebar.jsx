"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
// import { CiSettings, CiStar, CiShoppingCart, CiBookmark } from "react-icons/ci";
import { RxActivityLog } from "react-icons/rx";
import { IoGridOutline, IoBeakerOutline } from "react-icons/io5";
import { MdClose } from 'react-icons/md';
import { HiRectangleStack } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { TbTournament } from "react-icons/tb";




const Sidebar = ({isOpen, toggleSidebar}) => {
    const pathname = usePathname();

    const sidebar = [
        {
            icon: <IoGridOutline size={20} />,
            title: 'Dashboard',
            path: '/dashboard'
        },
        {
            icon: <HiRectangleStack size={20} />,
            title: 'Fixtures',
            path: '/dashboard/fixture'
        },
        {
            icon: <TbTournament size={20} />,
            title: 'Tournament',
            path: '/dashboard/tournament'
        },
    ];

    const downside = [
        {
            icon: <CiSettings size={20} />,
            title: 'Settings',
            path: '/dashboard/settings',
        },
        {
            icon: <IoLogOutOutline size={20} />,
            title: 'Logout',
            path: '/recruiter/hiring'
        },
    ]
    return (
        <div className={`fixed top-0 left-0 h-screen sidebar sm:h-full sm:z-50 w-[307px] bg-[#EDF1FF] p-4 flex flex-col gap-[30px] overflow-y-hidden
        transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0`}>
            <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200'>
                <Image height={100} width={200} src={"/logo.png"} alt='' />
                <MdClose size={24} className='lg:hidden sm:block' onClick={toggleSidebar} />
            </div>
            <ul className='flex flex-col gap-[0.5rem] mt-3'>
                {sidebar.map((item, index) => (
                    <Link href={item.path} key={index}>
                        <li className={`flex items-center cursor-pointer h-[60px]  px-3 gap-2 ${pathname === item.path ? 'rounded-md bg-white border' : 'text-gray-500'}`}>
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    </Link>
                ))}
            </ul>
            <div className='flex flex-col justify-end mt-[15rem] sm:mt-[10rem] border-t-2'>
                {downside.map((items, index) => (
                    <Link href={items.path} key={index}>
                        <li className={`flex items-center cursor-pointer h-[60px]  px-3 gap-2 ${pathname === items.path? 'rounded-md bg-white border' : 'text-gray-500'}`}>
                            {items.icon}
                            <span>{items.title}</span>
                        </li>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar