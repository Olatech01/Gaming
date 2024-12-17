import Image from 'next/image'
import React from 'react'

const Settings = () => {
    return (
        <div>
            <form className='flex flex-col gap-4'>
                <div className='flex items-center gap-4 sm:flex-col sm:items-start'>
                    <Image height={100} width={200} src={"/profile.svg"}/>
                    <div>
                        <h2 className='text-[20px] font-bold'>Johnny Smart</h2>
                        <p className='text-[16px] font-normal'>johnnysmart@gmail.com</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5 sm:grid-cols-1'>
                    <div>
                        <label className='text-[20px] font-medium'>First Name</label>
                        <input
                            type="text"
                            className='h-[45px] border-2 rounded-md w-full outline-none px-2'
                            placeholder='Johnny'
                        />
                    </div>
                    <div>
                        <label className='text-[20px] font-medium'>Last Name</label>
                        <input
                            type="text"
                            className='h-[45px] border-2 rounded-md w-full outline-none px-2'
                            placeholder='Smart'
                        />
                    </div>
                    <div>
                        <label className='text-[20px] font-medium'>Email</label>
                        <input
                            type="text"
                            className='h-[45px] border-2 rounded-md w-full outline-none px-2'
                            placeholder='JohnnySmart@gmail.com'
                        />
                    </div>
                    <div>
                        <label className='text-[20px] font-medium'>Tag  Name</label>
                        <input
                            type="text"
                            className='h-[45px] border-2 rounded-md w-full outline-none px-2'
                            placeholder='JohnnyB'
                        />
                    </div>
                    <div>
                        <label className='text-[20px] font-medium'>Phone Number</label>
                        <input
                            type="text"
                            className='h-[45px] border-2 rounded-md w-full outline-none px-2'
                            placeholder='00000000000'
                        />
                    </div>
                </div>
                <button className='w-[20%] sm:w-full h-[45px] rounded-md bg-gray-700 text-white'>Save</button>
            </form>
        </div>
    )
}

export default Settings