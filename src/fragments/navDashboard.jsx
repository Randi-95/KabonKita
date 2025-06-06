import { Award, Calendar, Home, Target, User } from "react-feather"

function NavDashboard() {
    return(
    <div className="bg-secondary z-50 fixed flex items-center md:items-start bottom-0 md:bottom-auto md:left-0 md:flex-col md:w-60 h-20 md:h-full w-full border-t md:border-t-0 md:border-r border-[#2d5c41] justify-evenly md:justify-start md:gap-6 md:pt-8">
        <div className="md:flex justify-center w-full hidden">
            <img src="/KarbonKita.png" alt="" className="w-40 -translate-x-2"/>
        </div>
        
        <div className="flex flex-col md:flex-row md:gap-4 items-center md:items-center md:w-full md:px-4 md:py-3  md:border-r-2 md:border-primary md:transition-colors cursor-pointer">
            <Home size="25px" className="text-primary"/>
            <p className="text-primary text-xs md:text-base md:font-medium">Beranda</p>
        </div>
        
        <div className="group flex flex-col text-gray-400 md:flex-row md:gap-4 items-center md:w-full md:px-4 md:py-3 transition-colors cursor-pointer md:hover:border-r-2 hover:border-primary">
            <Target size="25px" className="text-gray-400 group-hover:text-primary" />
            <p className="text-xs md:text-base md:font-medium group-hover:text-primary">Misi</p>
        </div>

        <div className="group flex flex-col text-gray-400 md:flex-row md:gap-4 items-center md:w-full md:px-4 md:py-3 transition-colors cursor-pointer md:hover:border-r-2 hover:border-primary">
            <Award size="25px" className="text-gray-400 group-hover:text-primary" />
            <p className="text-xs md:text-base md:font-medium group-hover:text-primary">Peringkat</p>
        </div>

        <div className="group flex flex-col text-gray-400 md:flex-row md:gap-4 items-center md:w-full md:px-4 md:py-3 transition-colors cursor-pointer md:hover:border-r-2 hover:border-primary ">
            <Calendar size="25px" className="text-gray-400 group-hover:text-primary" />
            <p className="text-xs md:text-base md:font-medium group-hover:text-primary">Acara</p>
        </div>

        <div className="group flex flex-col text-gray-400 md:flex-row md:gap-2 items-center md:w-full md:px-3 transition-colors cursor-pointer ">
            <div className="md:border flex w-full p-2 rounded-lg gap-1">
                <img src="https://i.pravatar.cc/150?img=60" alt="" className="w-10 rounded-full z-0 "/>
                <div className="md:flex flex-col hidden">
                    <p className="text-xs md:text-base md:font-medium group-hover:text-primary">Randi </p>
                    <p className="text-xs md:text-[12px] md:font-medium group-hover:text-primary -mt-1">2000 poin </p>
                </div>
            </div>
        </div>

    </div>
    )
}

export default NavDashboard