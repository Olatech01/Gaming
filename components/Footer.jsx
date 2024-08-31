
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col'>
            <div
                id="Contact"
                className="lg:flex gap-5 justify-between bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600  lg:h-[60vh] items-center sm:text-center sm:justify-between md:justify-center sm:py-[20px] w-full"
            >
                <div className="flex items-center gap-2 lg:pl-[5%] max-sm:justify-center max-sm:pt-5 md:justify-center md:pt-5">
                    <Image height={100} width={30} src={"/geo-alt-fill.svg"} alt="" />
                    <p className="text-black font-semibold text-center md:text-xl">
                        PlaySport UniGate, Off University Of Ilorin Road, <br /> Tanke,
                        Ilorin, Kwara State
                    </p>
                </div>
                <div className="md:flex md:items-center md:justify-center">
                    <Image
                        // className="lg:h-[50vh] max-sm:h-[30vh] drop-shadow-2xl"
                        width={400}
                        height={400}
                        src={"/pad.png"}
                        alt=""
                    />
                </div>
                <div className="flex gap-5 flex-col lg:pr-5 max-sm:items-center max-sm:pb-5 md:items-center sm:items-center md:pb-5">
                    <h1 className="text-black font-bold text-3xl md:text-3xl">
                        <u>Contact Us</u>
                    </h1>
                    <div className="flex lg:gap-5 flex-col max-sm:items-center text-black max-sm:justify-center max-sm:gap-1 max-sm:font-bold">
                        <div className="flex items-center gap-2">
                            <a className="flex items-center" href="https://www.instagram.com/joys_tickjunction">
                                <Image height={100} width={20} src={"/instagram.svg"} alt="" />
                            </a>
                            <a href="https://www.instagram.com/joys_tickjunction">
                            <p className="flex items-center font-semibold cursor-pointer md:text-xl">
                                @joys_tickjunction
                            </p>
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="">
                                <Image height={100} width={20} src={"/envelope.svg"} alt="" style={{ color: "white" }} />
                            </a>
                            <p className="flex items-center font-semibold cursor-pointer md:text-xl">
                                joystickjunction3@gmail.com
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="">
                                <Image height={100} width={20} src={"/telephone.svg"} alt="" />
                            </a>
                            <p className="flex items-center font-semibold cursor-pointer md:text-xl">
                                +2349134682828
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <a href="https://wa.link/b08iy4">
                                <Image height={100} width={20} src={"/whatsapp.svg"} alt="" />
                            </a>
                            <a href="https://wa.link/b08iy4">
                            <p className="flex items-center font-semibold cursor-pointer md:text-xl">
                                +2349042094868
                            </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer