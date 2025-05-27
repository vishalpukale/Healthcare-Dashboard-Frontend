import React from 'react'
import Sidebar from '../components/Sidebar'
import DashboardMainContent from '../components/DashboardMainContent'

const Home = () => {
  return (
    <div className='h-[100vh] w-[100%] bg-[#E2EDF9] px-4 py-6'>
        <div className='rounded-2xl bg-white p-3 flex h-full'>
            <Sidebar />
            <DashboardMainContent />
        </div>
    </div>
  )
}

export default Home