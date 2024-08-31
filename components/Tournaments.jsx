import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Tournaments = () => {
    return (
        <div className='flex items-center justify-center bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 py-[30px]'>
            <div className='w-1/2  flex flex-col gap-5 '>
                <h2 className='text-5xl font-extrabold text-black text-center'>Tournaments</h2>
                    <div className='flex flex-col gap-[20px] text-center'>
                        <h2 className='text-xl font-semibold'>
                            Join our epic PS5 and PS4 tournaments. Expect intense competition, skillful gameplay, and thrilling matchups as participants vie for the championship title. Who will emerge victorious? Get ready for an unforgettable gaming showdown!
                        </h2>
                        <Link href={"https://wa.link/b08iy4"}>
                            <button className='bg-black h-[40px] w-[200px] text-white rounded-full font-bold hover:bg-white hover:text-black'>Learn More</button>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default Tournaments