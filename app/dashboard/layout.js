import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout'
import { AuthContext } from '@/components/libs/AuthContext'
import { UserContext } from '@/components/libs/UserContext'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div>
            <AuthContext>
                <UserContext>
                    <DashboardLayout>
                        {children}
                    </DashboardLayout>
                </UserContext>
            </AuthContext>
        </div>
    )
}

export default layout