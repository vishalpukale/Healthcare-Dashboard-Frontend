import DashboardIcon from '@mui/icons-material/Dashboard';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InsightsIcon from '@mui/icons-material/Insights';
import SmsIcon from '@mui/icons-material/Sms';
import CallIcon from '@mui/icons-material/Call';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return (
        <div className='bg-[#F2F9FF] overflow-scroll p-4 md:p-10 w-15 md:w-64 min-h-full grid content-between rounded-tl-2xl rounded-bl-2xl transition-all duration-300'>
            <div>
                <div className='!text-2xl font-bold text-center md:text-left'>
                    <span className='text-[#1BCBD3]'>H</span>
                    <span className='text-[#0E0F39] hidden md:inline'>ealthcare.</span>
                </div>

                <div className='space-y-5 mt-8 text-[10px] md:text-sm'>
                    <div className='text-gray-300 hidden md:block'>General</div>

                    <button className='text-[#0E0F39] flex flex-col md:flex-row justify-center md:justify-start items-center gap-1 md:gap-4 cursor-pointer'>
                        <DashboardIcon />
                        <div className="hidden md:block">Dashboard</div>
                    </button>

                    <button className='text-gray-400 flex flex-col md:flex-row justify-center md:justify-start items-center gap-1 md:gap-4 cursor-pointer'>
                        <ImportExportIcon />
                        <div className="hidden md:block">History</div>
                    </button>

                    <button className='text-gray-400 flex flex-col md:flex-row justify-center md:justify-start items-center gap-1 md:gap-4 cursor-pointer'>
                        <CalendarMonthIcon />
                        <div className="hidden md:block">Calendar</div>
                    </button>

                    <button className='text-gray-400 flex flex-col md:flex-row justify-center md:justify-start items-center gap-1 md:gap-4 cursor-pointer'>
                        <AddBoxIcon />
                        <div className="hidden md:block">Appointments</div>
                    </button>

                    <button className='text-gray-400 flex flex-col md:flex-row justify-center md:justify-start items-center gap-1 md:gap-4 cursor-pointer'>
                        <InsightsIcon />
                        <div className="hidden md:block">Statistics</div>
                    </button>
                </div>

                <div className='space-y-5 mt-8 text-sm block'>
                    <div className='hidden md:block text-gray-300'>Tools</div>

                    <button className='text-gray-400 flex items-center gap-4 cursor-pointer'>
                        <SmsIcon />
                        <div className='hidden md:block'>Chat</div>
                    </button>

                    <button className='text-gray-400 flex items-center gap-4 cursor-pointer'>
                        <CallIcon />
                        <div className='hidden md:block'>Support</div>
                    </button>
                </div>
            </div>


            <div className='text-sm'>
                <button className='text-gray-400 flex flex-col md:flex-row justify-center md:justify-start items-center gap-1 md:gap-4 cursor-pointer mt-10'>
                    <SettingsIcon />
                    <div className="hidden md:block">Settings</div>
                </button>
            </div>
        </div>
    );
};


export default Sidebar