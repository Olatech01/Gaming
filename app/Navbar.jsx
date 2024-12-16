"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


const Navbar = ({ scrollToSection, aboutRef, serviceRef, contactRef }) => {
  const [toggle, setToggle] = useState("")

  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className='bg-[white] w-full border-b flex justify-around items-center'>
      <div>
        <Image height={20} width={150} src={"/logo.png"} />
      </div>
      <ul className='flex gap-[20px] font-bold sm:hidden cursor-pointer'>
        <li onClick={() => scrollToSection(aboutRef)}>About</li>
        <li onClick={() => scrollToSection(serviceRef)}>Services</li>
        <li onClick={() => scrollToSection(contactRef)}>Contact</li>
      </ul>
      <div className='flex gap-3'>
        <button className='text-[16px] border border-black w-[150px] rounded-md h-[40px]'>Login</button>
        <button className='text-[16px] border bg-black text-white border-black w-[150px] rounded-md h-[40px]'>Register</button>
      </div>
      <button
        className="hidden bg-dimWhite sm:block rounded-xl bg-blue-gradient p-2 text-black z-[500]"
        onClick={handleToggle}
      >
        {toggle ? <RiCloseLine style={{ color: "white" }} /> : <RiMenu3Line style={{ color: "white" }} />}
      </button>
      <div
        className={`${toggle ? "translate-y-1/2 opacity-100" : "translate-y-0 opacity-0"
          } transition-all z-10 duration-500 bg-slate-300 ease-in-out text-black gap-[30px] p-3 bg-black-gradient absolute top-10 right-0 mx-1 my-2 min-w-[150px] rounded-xl sidebar`}
      >
        <ul className="text-dimWhite flex flex-col gap-4 w-full cursor-pointer">
          <li onClick={() => { scrollToSection(aboutRef); handleToggle(); }}>About</li>
          <li onClick={() => { scrollToSection(serviceRef); handleToggle(); }}>Services</li>
          <li onClick={() => { scrollToSection(contactRef); handleToggle(); }}>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar