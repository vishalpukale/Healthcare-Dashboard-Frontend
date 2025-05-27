import React from 'react'
import DashboardLeftContent from "./DashboardLeftContent"
import DashboardRightContent from "./DashboardRightContent"

const DashboardMainContent = () => {
  return (
    <div className='md:flex block w-full overflow-scroll'>
      <DashboardLeftContent />
      <DashboardRightContent />
    </div>
  )
}

export default DashboardMainContent