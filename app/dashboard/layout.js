import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </div>
    )
}

export default layout