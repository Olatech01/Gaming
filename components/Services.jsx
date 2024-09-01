import Image from 'next/image';
import React from 'react';

const Services = () => {
    return (
        <div className="relative bg-cover bg-center bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 text-black" style={{ backgroundImage: "url('/recent.png')" }}>
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            
            <div className="relative flex flex-col items-center justify-center sm:px-[20px] lg:gap-[50px] py-[30px] sm:gap-[20px]">
                <h1 className="lg:text-5xl sm:text-4xl font-extrabold text-white relative z-10">Services</h1>
                <div className="relative z-10 flex sm:flex-col">
                    <div className="flex gap-5 flex-col lg:items-center lg:justify-center max-sm:items-center md:items-center">
                        <h1 className="font-bold lg:text-2xl md:text-3xl text-white">
                            <u>Experience Our Services:</u>
                        </h1>
                        <ul className="flex gap-3 flex-col font-medium max-sm:px-5 text-orange-500">
                            <div className="flex gap-5">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl text-white">FC 24/25</li>
                            </div>
                            <div className="flex gap-5">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl text-white">COD and Mortal Kombat</li>
                            </div>
                            <div className="flex gap-5">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl text-white">Snooker and Air Hockey</li>
                            </div>
                            <div className="flex gap-5">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl text-white">VR Gaming Experience and Tournaments</li>
                            </div>
                            <div className="flex gap-5">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl text-white">PS5 and PS4 Console Repairs and Maintenance</li>
                            </div>
                        </ul>
                    </div>
                    <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-10 md:items-center md:mt-10 md:flex md:justify-center">
                        <Image height={100} width={400} src={"/bluepad.png"} alt="" />
                    </div>
                    <div className="flex gap-5 flex-col lg:items-center lg:justify-center max-sm:items-center md:items-center">
                        <h1 className="font-bold text-2xl text-white">
                            <u>Shop With Us:</u>
                        </h1>
                        <ul className="flex gap-3 flex-col font-medium max-sm:px-5 text-white">
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Video Games: PS5, PS4, and More</li>
                            </div>
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Gaming Gadgets</li>
                            </div>
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Gaming Consoles</li>
                            </div>
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Accessories</li>
                            </div>
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Games Installation</li>
                            </div>
                            <div className="flex gap-5 lg:items-center">
                                <Image height={20} width={20} src={"/check.svg"} alt="" />
                                <li className="md:text-xl">Board Games: Chess, Monopoly, Scrabble e.t.c</li>
                            </div>
                        </ul>
                        <a className="font-semibold p-3 relative bottom-[10rem] sm:h-20 sm:w-20 sm:left-[15rem] sm:bottom-[12rem] left-12 rounded-full bg-black text-white hover:bg-white hover:text-black" href="https://wa.link/b08iy4">
                            <button>ORDER <br /> NOW</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
