import React, { useState, useRef, useEffect } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const cardData = [
  { name: "Lungs", time: "1 Jan 2025", progress: 75, color: "#AA4647" },
  { name: "Teeth", time: "1 Feb 2025", progress: 75, color: "#6CCDB8" },
  { name: "Bone", time: "1 Mar 2025", progress: 75, color: "#EE725C" }
]

const DashboardLeftContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='w-full py-10 px-6'>

      <form className="">
        <label className="mb-1 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required />
          <button type="submit" className="text-[#3C3DA3] absolute end-0.5 bottom-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"><NotificationsIcon /></button>
        </div>
      </form>

      <div className='mt-6'>
        <div className='flex justify-between items-center'>
          <div className='text-2xl text-[#27297b]'>Dashboard</div>

          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex justify-center text-[#3C3DA3] w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold hover:bg-gray-50 focus:outline-none focus:ring-0 shadow-none border-none"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              Options
              <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">option</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">option</a>
                  <form method="POST" action="#" role="none">
                    <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Button</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='ml-6 my-4 md:flex block'>
          <div className='bg-[#F5F9FF] h-[50vh] sm:w-[160%] w-full rounded-2xl relative'>
            <div className='absolute right-2 top-2 text-gray-400'><ZoomInIcon /></div>

            <div className='absolute right-[-25px] top-20 text-white bg-[#086399] py-2 rounded-lg px-4 text-sm'>Healthy Heart</div>
            <div className='absolute left-[-25px] top-60 text-[#086399] bg-[#1ADCEC] py-2 rounded-lg px-4 text-sm'>Healthy Leg</div>
          </div>
          <div className='w-full lg:ml-16 mt-5 lg:mt-0 ml-0'>
            {
              cardData?.map((item, index) => (
                <div key={index} className='bg-[#F5F9FF] h-[13vh] px-4 py-2 mb-4 rounded-2xl'>
                  <div className='text-center text-[#27297b] text-md font-semibold'>{item.name}</div>
                  <div className='text-xs mt-2 text-gray-300'>Date: {item.time}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2 dark:bg-[#DEE1EA]">
                    <div className="h-2 rounded-full" style={{
                      width: `${item.progress}%`,
                      backgroundColor: item.color
                    }}></div>
                  </div>

                </div>
              ))
            }
            <div className='text-[#27297b] text-right text-xs hover:cursor-pointer'>Details <ArrowForwardIcon className="!text-xs" /></div>
          </div>

        </div>
      </div>

      <div className='bg-[#F5F9FF] h-auto rounded-2xl px-4 py-2'>
        <div className='flex justify-between'>
          <div className='text-lg text-[#27297b]'>Dashboard</div>
          <div className='text-xs mt-2 text-gray-300 '>3 Appointment on this week</div>
        </div>
        <div className='flex justify-around text-xs mt-10 text-gray-300'>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thurs</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
        </div>
      </div>

    </div>
  )
};

export default DashboardLeftContent;
