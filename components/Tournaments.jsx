import Image from 'next/image'
import React from 'react'

const Tournaments = () => {
    return (
        <div className='flex items-center justify-center bg-gray-900 py-[30px]'>
            <div className='w-[80%]  flex flex-col gap-5 '>
                <h2 className='text-[40px] font-extrabold text-white'>Tournaments</h2>
                <div className='grid grid-cols-2 gap-[20px] sm:grid-cols-1'>
                    <div className='bg-[#1c1f3a] w-full flex items-center gap-5 py-[30px] px-[20px]'>
                        <Image height={100} width={70} src={"/god.jpg"} />
                        <h2 className='text-[18px] font-semibold text-white'> PS5 Tournaments</h2>
                    </div>
                    <div className='bg-[#1c1f3a] w-full flex items-center gap-5 py-[30px] px-[20px]'>
                        <Image height={100} width={70} src={"/mortal.jpg"} />
                        <h2 className='text-[18px] font-semibold text-white'> PS4 Tournaments</h2>
                    </div>
                    <div className='bg-[#1c1f3a] w-full flex items-center gap-5 py-[30px] px-[20px]'>
                        <Image height={100} width={70} src={"/fifa.jpg"} />
                        <h2 className='text-[18px] font-semibold text-white'> Thursday's Game Night</h2>
                    </div>
                    <div className='bg-[#1c1f3a] w-full flex items-center gap-5 py-[30px] px-[20px]'>
                        <Image height={100} width={70} src={"/cod.jpg"} />
                        <h2 className='text-[18px] font-semibold text-white'> Mini Bar For Gamers</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tournaments