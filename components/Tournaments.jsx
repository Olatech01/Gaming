import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Tournaments = () => {
    return (
        <div className='flex items-center justify-center bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 py-[30px]'>
            <div className='w-1/2  flex flex-col gap-5 '>
                <h2 className='text-[40px] font-extrabold text-white'>Tournaments</h2>
                <div className='grid grid-cols-2 gap-[20px] sm:grid-cols-1 items-center'>
                    <div className=''>
                        <Image height={100} width={100} src={"/fifa.jpg"} className='w-full' />
                    </div>
                    <div className='flex flex-col gap-[20px]'>
                        <h2>
                            Join our epic PS5 and PS4 tournaments. Expect intense competition, skillful gameplay, and thrilling matchups as participants vie for the championship title. Who will emerge victorious? Get ready for an unforgettable gaming showdown!
                        </h2>
                        <Link href={""}>
                            <button className='bg-black h-[40px] w-[200px] text-white rounded-full font-bold'>Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tournaments