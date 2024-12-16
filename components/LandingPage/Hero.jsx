import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='herobg flex flex-col items-center'>
            <section className="h-screen flex items-center justify-center ">
                <div className="text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold animate-fade-in-down">Welcome to Joystick Junction</h1>
                    <p className="text-lg md:text-2xl mt-4 animate-fade-in-up font-semibold">Start Your Gaming Journey Today!</p>
                    <a href="https://wa.link/b08iy4">
                        <button className="mt-8 px-8 py-4 bg-black hover:bg-gray-600 hover:text-black hover:font-semibold rounded-full text-xl animate-bounce">
                            Book a Session
                        </button>
                    </a>
                </div>
            </section>
            <div className='w-full px-[7rem] flex flex-col gap-3'>
                <h2 className='text-[25px] text-white font-semibold'>Trending</h2>
                <div className='grid grid-cols-3 gap-3 h-[]'>
                    <Image height={100} width={200} src={"/mortalkombat.jpg"} className='w-full h-[20vh]'/>
                    <Image height={100} width={200} src={"/creed.jpg"} className='w-full h-[20vh]'/>
                    <Image height={100} width={200} src={"/cod.jpg"} className='w-full h-[20vh]'/>
                </div>
            </div>
        </div>
    )
}

export default Hero