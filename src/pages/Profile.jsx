import { LogOut, Star, User } from "react-feather";
import DarkModeToggle from "../component/darkMode";
import NavDashboard from "../fragments/navDashboard";
import { Headphones, Info } from "lucide-react";

function ProfilePage() {
    return(
        <div className=" bg-background h-180">
           <NavDashboard/>
           <div className="lg:w-3/4 lg:absolute lg:right-0">
                <div className="w-full p-4 flex justify-between items-center">
                    <div className="bg-gradient-to-t from-gray-700 to-gray-600 p-2 rounded-lg ">
                        <User className="text-white "/>
                    </div>
                    <p className="text-gray-100 font-semibold text-2xl font-mono">Profil</p>
                    <DarkModeToggle/>
                </div>

                <div className="p-5 flex items-center gap-4 justify-center">
                     <img src="https://i.pravatar.cc/150?img=60" alt="" className="rounded-full w-25 border-2 border-primary"/>
                     <div className="flex flex-col gap-1">
                        <p className="text-gray-100 font-semibold text-xl">Randi Permana</p>
                        <div className="flex items-center border-2 border-primary w-fit p-1 px-2 gap-2 rounded-lg">
                            <Star className="text-primary" size="20px"/>
                            <p className="text-primary">200 Poin</p>
                        </div>
                     </div>
                </div>

                <button className="w-[80%] p-3 rounded-xl mx-auto shadow-lg flex justify-center bg-secondary ">
                    <p className="text-gray-200 text-lg font-bold ">Lapor Aksi Hijau Kamu</p>
                </button>

                <div className="h-100 rounded-t-4xl mt-6 w-full bg-secondary p-4 flex flex-col gap-4">
                    <button class="flex items-center border-b border-primary justify-between w-full   p-3 hover:bg-green-800 rounded-t-lg focus:outline-none ">
                        <div class="flex items-center">
                            <User className="text-white"/>
                            
                            <span class="ml-4 text-lg font-medium text-gray-200">Informasi Akun</span>
                        </div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button class="flex items-center border-b border-primary justify-between w-full   p-3 hover:bg-green-800  focus:outline-none ">
                        <div class="flex items-center">
                            <Info className="text-white"/>
                            
                            <span class="ml-4 text-lg font-medium text-gray-200">Tentang Kami</span>
                        </div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button class="flex items-center border-b border-primary justify-between w-full   p-3 hover:bg-green-800  focus:outline-none ">
                        <div class="flex items-center">
                            <Headphones className="text-white"/>
                            
                            <span class="ml-4 text-lg font-medium text-gray-200">Bantuan</span>
                        </div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button className="flex items-center justify-center border-2 border-primary w-full py-4 px-2 gap-2 rounded-lg">
                            <LogOut className="text-primary" size="30px"/>
                            <p className="text-primary text-xl font-semibold">Logout</p>
                    </button>
                </div>
            </div>
        </div>
    )
} 

export default ProfilePage;