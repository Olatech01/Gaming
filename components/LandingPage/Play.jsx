import Image from 'next/image'
import React from 'react'

const Play = () => {
  return (
    <div className='play flex items-center justify-center gap-[3rem]'>
        <div className='text-white flex flex-col gap-3'>
            <h2 className='text-[30px] font-bold'>Playstation Now</h2>
            <p className='text-[16px] font-medium w-[350px]'>Hundreds of incredible games on demand, which on will you play first?</p>
        </div>
        <Image height={100} width={310} src={"/gun.svg"} className=''/>
    </div>
  )
}

export default Play