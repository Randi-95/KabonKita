import { Award, Calendar, Home, Target, User } from "react-feather"

function NavDashboard() {
    return(
    <div className="bg-secondary z-50 fixed flex items-center lg:items-start bottom-0 lg:bottom-auto lg:left-0 lg:flex-col lg:w-60 h-20 lg:h-full w-full border-t lg:border-t-0 lg:border-r border-[#2d5c41] justify-evenly lg:justify-start lg:gap-6 lg:pt-8">
        <div className="lg:flex justify-center w-full hidden">
            <img src="/KarbonKita.png" alt="" className="w-40 -translate-x-2"/>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:gap-4 items-center lg:items-center lg:w-full lg:px-4 lg:py-3  lg:border-r-2 lg:border-primary lg:transition-colors cursor-pointer">
            <Home size="25px" className="text-primary"/>
            <p className="text-primary text-xs lg:text-base lg:font-medium">Beranda</p>
        </div>
        
        <div className="group flex flex-col text-gray-400 lg:flex-row lg:gap-4 items-center lg:w-full lg:px-4 lg:py-3 transition-colors cursor-pointer lg:hover:border-r-2 hover:border-primary">
            <Target size="25px" className="text-gray-400 group-hover:text-primary" />
            <p className="text-xs lg:text-base lg:font-medium group-hover:text-primary">Misi</p>
        </div>

        <div className="group flex flex-col text-gray-400 lg:flex-row lg:gap-4 items-center lg:w-full lg:px-4 lg:py-3 transition-colors cursor-pointer lg:hover:border-r-2 hover:border-primary">
            <Award size="25px" className="text-gray-400 group-hover:text-primary" />
            <p className="text-xs lg:text-base lg:font-medium group-hover:text-primary">Peringkat</p>
        </div>

        <div className="group flex flex-col text-gray-400 lg:flex-row lg:gap-4 items-center lg:w-full lg:px-4 lg:py-3 transition-colors cursor-pointer lg:hover:border-r-2 hover:border-primary ">
            <Calendar size="25px" className="text-gray-400 group-hover:text-primary" />
            <p className="text-xs lg:text-base lg:font-medium group-hover:text-primary">Acara</p>
        </div>

        <div className="group flex flex-col text-gray-400 lg:flex-row lg:gap-2 items-center lg:w-full lg:px-3 transition-colors cursor-pointer ">
            <div className="lg:border flex w-full p-2 rounded-lg gap-1">
                <img src="https://i.pravatar.cc/150?img=60" alt="" className="w-10 rounded-full z-0 "/>
                <div className="lg:flex flex-col hidden">
                    <p className="text-xs lg:text-base lg:font-medium group-hover:text-primary">Randi </p>
                    <p className="text-xs lg:text-[12px] lg:font-medium group-hover:text-primary -mt-1">2000 poin </p>
                </div>
            </div>
        </div>

    </div>
    )
}

export default NavDashboard