import { Award, Calendar, Home, Target, User } from "react-feather"
import { Link, NavLink } from "react-router-dom"

function NavAdmin() {
    return(
    <div className="bg-secondary z-50 fixed flex items-center lg:items-start bottom-0 lg:bottom-auto lg:left-0 lg:flex-col lg:w-60 h-20 lg:h-full w-full border-t lg:border-t-0 lg:border-r border-[#2d5c41] justify-evenly lg:justify-start lg:gap-6 lg:pt-8">
        <div className="lg:flex justify-center w-full hidden">
            <img src="/KarbonKita.png" alt="" className="w-40 -translate-x-2"/>
        </div>
        
        <NavLink 
        to="/admin" 
        className={({ isActive }) =>
            `flex flex-col lg:flex-row lg:gap-4 items-center lg:w-full lg:px-4 lg:py-3 cursor-pointer lg:transition-colors ${
            isActive ? 'text-primary lg:border-primary  lg:border-r-2' : 'text-gray-400 hover:text-primary lg:hover:border-r-2 lg:hover:border-primary'
            }`
        }>
        <Home size="25px" className={({ isActive }) => (isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary')} />
        <p className="text-xs lg:text-base lg:font-medium">Beranda</p>
        </NavLink>
    </div>
    )
}

export default NavAdmin