// pages/index.js

"use client"
import Navbar from '@/app/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import Services from './Services';
import Tournaments from './Tournaments';
import Footer from './Footer';

export default function Home() {
    const aboutRef = useRef(null);
    const serviceRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>
            <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} serviceRef={serviceRef} contactRef={contactRef} />
            <main className="text-white">
                {/* Hero Section */}
                <section className="h-screen flex items-center justify-center bg-hero-video bg-cover bg-center hero">
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

                {/* About Us Section */}
                <section ref={aboutRef} className="py-16 px-4 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 text-black">
                    <div className="max-w-6xl mx-auto text-center flex items-center justify-center flex-col">
                        <h2 className="text-5xl font-extrabold animate-fade-in">About Us</h2>
                        <p className="mt-6 text-lg animate-fade-in-up w-[500px] sm:w-full font-semibold">
                            JoyStick Junction (Paradise For Gamers) is a place where you and your
                            team mates can come and experience fast and seamless gaming
                            experience. Our Gaming Hall is packed with industry standards gaming
                            equipment.
                        </p>
                    </div>
                </section>

                {/* Games Offered Section */}
                <section className="py-16 px-4 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 text-center">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-5xl font-extrabold text-black animate-fade-in">Features</h2>
                        <div className=" py-4">
                            <Marquee gradient={false} speed={50} >
                                <div className='flex gap-[30px]'>
                                    <h2 className='text-[28px] font-mono font-semibold text-yellow-500'> <i>*PS5-Tournaments*</i></h2>
                                    <h2 className='text-[28px] font-mono font-semibold text-red-700'> <i>*PS4-Tournaments*</i></h2>
                                    <h2 className='text-[28px] font-mono font-semibold text-yellow-500'> <i>*Thursday's Game Night*</i></h2>
                                    <h2 className='text-[28px] font-mono font-semibold text-red-700'> <i>*Mini Bar For Gamers*</i></h2>
                                    <h2 className='text-[28px] font-mono font-semibold text-red-700'> <i></i></h2>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                {/* <section className="py-16 px-4 bg-gray-900">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl font-bold animate-fade-in">Pricing</h2>
                        <p className="mt-6 text-lg animate-fade-in-up">Affordable gaming sessions starting at just #2000.</p>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-800 p-8 rounded-lg animate-fade-in-left">
                                <h3 className="text-2xl font-bold">1-Hour Session</h3>
                                <p className="mt-4">#1000</p>
                            </div>
                            <div className="bg-gray-800 p-8 rounded-lg animate-fade-in-up">
                                <h3 className="text-2xl font-bold">3-Hour Session</h3>
                                <p className="mt-4">#3000</p>
                            </div>
                            <div className="bg-gray-800 p-8 rounded-lg animate-fade-in-right">
                                <h3 className="text-2xl font-bold">Full Day Pass</h3>
                                <p className="mt-4">#24000</p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Testimonials Section */}
                <section className="py-16 px-4 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 text-center">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-extrabold text-black animate-fade-in">What Gamers Are Saying</h2>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-800 p-8 rounded-lg animate-fade-in-left">
                                <p className="text-lg">"The best place to game! The atmosphere is amazing, and the staff is super friendly."</p>
                                <h3 className="mt-4 text-xl font-bold">- Suleiman</h3>
                            </div>
                            <div className="bg-gray-800 p-8 rounded-lg animate-fade-in-right">
                                <p className="text-lg">"I love coming here with my friends. The selection of games is awesome!"</p>
                                <h3 className="mt-4 text-xl font-bold">- Mustapha</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Location & Contact Section */}

            </main>
            <div ref={serviceRef}>
                <Services />
            </div>
            <div>
                <Tournaments />
            </div>
            <div ref={contactRef}>
                <Footer />

            </div>
        </div>
    );
}
