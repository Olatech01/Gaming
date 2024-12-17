"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import Navbar from './Navbar';
import Footer from '@/components/Footer';

const AppWrapper = ({children}) => {
    const pathname = usePathname();

    const hideNavbarFooterPaths = [
        "/auth/register",
        "/auth/login",
        "/auth/forgetPassword",
        "/auth/otpVerification",
        "/auth/resetPassword",
        "/dashboard",
        "/dashboard/settings",
        "/dashboard/tournament",
        "/dashboard/fixture",
    ].includes(pathname)
    return (
        <div>
            {!hideNavbarFooterPaths && <Navbar /> }
            <main>
                {children}
            </main>
            {/* {hideNavbarFooterPaths && <Footer />} */}
        </div>
    )
}

export default AppWrapper