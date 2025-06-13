import { Award, Bookmark, Home, Target } from "react-feather";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function NavDashboard() {
  const { profile } = useAuth();

  return (
    <div className="bg-background z-50 fixed flex items-center lg:items-start bottom-0 lg:bottom-auto lg:left-0 lg:flex-col lg:w-60 h-20 lg:h-full w-full border-t lg:border-t-0 lg:border-r border-[#2d5c41] justify-evenly lg:justify-start lg:gap-6 lg:pt-8">

      <div className="lg:flex justify-center w-full hidden">
        <img src="/KarbonKita.png" alt="Logo" className="w-40 -translate-x-2" />
      </div>

      <NavLink to="/Home" className={({ isActive }) =>
        `flex flex-col lg:flex-row lg:gap-4 items-center lg:w-full lg:px-4 lg:py-3 cursor-pointer lg:transition-colors ${
          isActive ? 'text-primary lg:border-primary lg:border-r-2' : 'text-gray-400 hover:text-primary lg:hover:border-r-2 lg:hover:border-primary'
        }`
      }>
        {({ isActive }) => (
          <>
            <Home size={25} className={isActive ? "text-primary" : "text-gray-400 group-hover:text-primary"} />
            <p className="text-xs lg:text-base lg:font-medium">Beranda</p>
          </>
        )}
      </NavLink>

      <NavLink to="/misi" className={({ isActive }) =>
        `flex flex-col lg:flex-row lg:gap-4 items-center lg:w-full lg:px-4 lg:py-3 cursor-pointer lg:transition-colors ${
          isActive ? 'text-primary lg:border-primary lg:border-r-2' : 'text-gray-400 hover:text-primary lg:hover:border-r-2 lg:hover:border-primary'
        }`
      }>
        {({ isActive }) => (
          <>
            <Target size={25} className={isActive ? "text-primary" : "text-gray-400"} />
            <p className="text-xs lg:text-base lg:font-medium">Misi</p>
          </>
        )}
      </NavLink>

      <NavLink to="/peringkat" className={({ isActive }) =>
        `flex flex-col lg:flex-row lg:gap-4 items-center lg:w-full lg:px-4 lg:py-3 cursor-pointer lg:transition-colors ${
          isActive ? 'text-primary lg:border-primary lg:border-r-2' : 'text-gray-400 hover:text-primary lg:hover:border-r-2 lg:hover:border-primary'
        }`
      }>
        {({ isActive }) => (
          <>
            <Award size={25} className={isActive ? "text-primary" : "text-gray-400"} />
            <p className="text-xs lg:text-base lg:font-medium">Peringkat</p>
          </>
        )}
      </NavLink>

      <NavLink to="/lencana" className={({ isActive }) =>
        `flex flex-col lg:flex-row lg:gap-4 items-center lg:w-full lg:px-4 lg:py-3 cursor-pointer lg:transition-colors ${
          isActive ? 'text-primary lg:border-primary lg:border-r-2' : 'text-gray-400 hover:text-primary lg:hover:border-r-2 lg:hover:border-primary'
        }`
      }>
        {({ isActive }) => (
          <>
            <Bookmark size={25} className={isActive ? "text-primary" : "text-gray-400"} />
            <p className="text-xs lg:text-base lg:font-medium">Lencana</p>
          </>
        )}
      </NavLink>

      <Link to="/profile" className="group flex flex-col text-gray-400 lg:flex-row lg:gap-2 items-center lg:w-full lg:px-3 transition-colors cursor-pointer">
        <div className="lg:border flex w-full p-2 rounded-lg gap-1">
          <img src={profile?.profile_url} alt="User" className="w-10 rounded-full z-0" />
          <div className="lg:flex flex-col hidden">
            <p className="text-xs lg:text-base lg:font-medium group-hover:text-primary">
              {profile?.nama || "Pengguna"}
            </p>
            <p className="text-xs lg:text-[12px] lg:font-medium group-hover:text-primary -mt-1">
              {profile?.points || 0} poin
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NavDashboard;
