import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const DashboardRightContent = () => {
  const weekSchedule = [
    { day: "Mon", date: 25, times: ["10:00", "11:00", "12:00"] },
    { day: "Tue", date: 26, times: ["10:00", "11:00", "12:00"] },
    { day: "Wed", date: 27, times: ["10:00", "11:00", "12:00"] },
    { day: "Thu", date: 28, times: ["10:00", "11:00", "12:00"] },
    { day: "Fri", date: 29, times: ["10:00", "11:00", "12:00"] },
    { day: "Sat", date: 30, times: ["10:00", "11:00", "12:00"] },
    { day: "Sun", date: 31, times: ["10:00", "11:00", "12:00"] },
  ];

  return (
    <div className='w-full h-full'>
      <div className='bg-[#F2F9FF] rounded-tr-2xl rounded-br-2xl p-4 md:p-10'>

        <div className='flex justify-end gap-3 '>
          <div className='bg-[#1BE1EC] rounded-md p-1'><PersonIcon /></div>
          <div className='bg-[#2E3399] rounded-md p-1'><AddIcon style={{ color: "white" }} /></div>
        </div>

        <div className='mt-6'>
          <div className='flex justify-between'>
            <div className='text-lg text-[#27297b]'>October 2025</div>
            <div className='gap-5'>
              <ArrowLeftIcon />
              <ArrowRightIcon />
            </div>
          </div>

          <div className="flex justify-between mt-4 ">
            {weekSchedule.map(({ day, date, times }, index) => (
              <div key={index} className="text-center w-full cursor-pointer py-2 rounded-2xl hover:bg-[#EAF3FE]">
                <div className="text-xs text-[#27297b] ">{day}</div>
                <div className="text-xl text-[#27297b] font-semibold mt-2">{date}</div>
                {times.map((time, idx) => (
                  <div key={idx} className="text-xs text-[#27297b] mt-2">{time}</div>
                ))}
              </div>
            ))}
          </div>

          <div className='flex gap-2 mt-4 justify-around'>
            <div className='bg-[#30339C] px-5 py-2 rounded-2xl  text-[#F1F5FF]'>
              <div className='text-md'>Dentist</div>
              <div className='text-xs mt-2'>09:00-11:00</div>
              <div className='text-xs'>Dr-Caneron Williamson</div>
            </div>
            <div className='bg-[#D8DEF7] px-5 py-2 rounded-2xl text-[#27297b]'>
              <div className='text-md'>Physiotherapy Appoinment</div>
              <div className='text-xs mt-2'>09:00-11:00</div>
              <div className='text-xs'>Dr-Kelvin Williamson</div>
            </div>
          </div>
        </div>

        <div className='mt-6'>
          <div className='text-[#27297b] text-xl'>The Upcoming Schedule</div>
          <div className='text-gray-400 text-sm mt-3'>On Thursday</div>

          <div className='flex gap-2 mt-4 justify-around'>
            <div className='bg-[#D8DEF7] px-8 py-2 rounded-2xl text-[#27297b]'>
              <div className='text-md'>Health checkup complete</div>
              <div className='text-xs mt-2'>09:00</div>  
            </div>
            <div className='bg-[#D8DEF7] px-8 py-2 rounded-2xl text-[#27297b]'>
              <div className='text-md'>Opthalmologist</div>
              <div className='text-xs mt-1'>11:00</div>
            </div>
          </div>

          <div className='text-gray-400 text-sm mt-3'>On Thursday</div>

          <div className='flex gap-8 mt-4 ml-2'>
            <div className='bg-[#D8DEF7] px-8 py-2 rounded-2xl text-[#27297b]'>
              <div className='text-md'>Cardiologist</div>
              <div className='text-xs mt-2'>09:00 AM</div>  
            </div>
            <div className='bg-[#D8DEF7] px-8 py-2 rounded-2xl text-[#27297b]'>
              <div className='text-md'>Neurologist</div>
              <div className='text-xs mt-1'>11:00 PM</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardRightContent;