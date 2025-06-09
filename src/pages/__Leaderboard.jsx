import { Crown, Star, Trophy, Medal, Award } from 'lucide-react';
import NavDashboard from "../fragments/navDashboard";
import { Link } from "react-router-dom";

function LeaderboardPage() {
    return(
        <div className="h-[9999px] bg-background ">
           <NavDashboard/>
           <div className="lg:w-3/4 lg:absolute lg:right-0">
                <div className=" p-4 flex items-center gap-2">
                    <Trophy size="26px" color="#FFC107"/>
                    <h2 className="text-gray-200 font-mono text-2xl">Papan Peringkat</h2>
                </div>

                
            {/*
     tes
     */}
                
                <div className="grid grid-cols-3 mb-10  m-2 bg-gray-800 rounded-md">
                    <Link to="/" className="flex flex-col gap-2">
                        <div className="bg-gray-700 p-2 rounded-md shadow-lg flex items-center justify-center">
                            <h2 className="text-green-400 font-mono font-bold text-xs lg:text-lg">
                            Tingkat RT
                            </h2>
                        </div>
                    </Link>

                    <Link to="" className="flex flex-col gap-2">
                        <div className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 shadow-lg flex items-center justify-center">
                            
                            <h2 className="text-green-400 font-mono font-bold text-xs lg:text-lg">
                            Tingkat RW
                            </h2>
                        </div>
                    </Link>

                    <Link className="flex flex-col gap-2">
                        <div className="bg-gray-800 p-2 rounded-md hover:bg-gray-700  shadow-lg flex items-center justify-center">
                            
                            <h2 className="text-green-400 font-mono font-bold text-xs lg:text-lg">
                            Kelurahan
                            </h2>
                        </div>
                    </Link>
                </div>


                <div className="flex justify-around items-end p-4 gap-3">

                    <div className="flex flex-col items-center w-1/3">
                        <img src="https://i.pravatar.cc/150?img=60" alt="Avatar Juara 2" className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-2xl z-0 border-2 border-gray-400 shadow-lg shadow-gray-400"/>
                        <div className="flex justify-center w-full">
                        
                            <div className="z-10 bg-gray-400 flex justify-center items-center gap-1 w-12 -mt-4 rounded-md border-[3px] border-background">
                            
                                <Medal size="12px" className='text-white'/>
                                <p className="text-sm font-semibold text-white">2</p>
                            </div>
                        </div>

                        <div className="h-20 bg-gradient-to-t from-gray-600 flex justify-center items-end p-2 to-gray-400  w-20 rounded-t-xl mt-2">
                            <Medal className='text-white'/> 
                        </div>
                    
                        <div className="flex flex-col items-center text-center mt-2">
                            <p className="text-sm font-bold text-gray-200">Rina</p>
                            <div className="flex items-center gap-1">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#a9abb0" stroke="#a9abb0" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <p className="text-gray-300 text-xs font-semibold">8,500 Poin</p>
                            </div>
                        </div>
                    </div>

                
                    <div className="flex flex-col items-center w-1/3 -translate-y-5">
                        <img src="https://i.pravatar.cc/150?img=10" alt="Avatar Juara 1" className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-2xl z-0 border-2 border-amber-400 shadow-lg shadow-amber-400"/>
                        <div className="flex justify-center w-full">
                        
                            <div className="z-10 bg-amber-400 flex justify-center items-center gap-1 w-12 -mt-4 rounded-md border-[3px] border-background">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>
                                <p className="text-sm font-semibold text-white">1</p>
                            </div>

                            
                        </div>

                        <div className="h-20 bg-gradient-to-t flex justify-center items-end p-2  from-yellow-600 to-yellow-400 w-20 rounded-t-xl mt-2">
                            <Trophy className="text-white"/>
                        </div>

                        <div className="flex flex-col items-center text-center mt-2">
                            <p className="text-base font-bold text-white">Randi Permana</p>
                            <div className="flex items-center gap-1">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#f7b733" stroke="#f7b733" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <p className="text-gray-300 text-xs font-semibold">12,300 Poin</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-1/3">
                        <img src="https://i.pravatar.cc/150?img=16" alt="Avatar Juara 3" className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-2xl z-0 border-2 border-amber-700 shadow-lg shadow-amber-800"/>
                        <div className="flex justify-center w-full">
                        
                            <div className="z-10 bg-amber-700 flex justify-center items-center gap-1 w-12 -mt-4 rounded-md border-[3px] border-background">
                                
                                <Award size="12px" className='text-white'/>
                                <p className="text-sm font-semibold text-white">3</p>
                            </div>
                        </div>
                    
                        <div className="h-20 bg-gradient-to-t from-amber-700 to-amber-500 flex justify-center items-end p-2 w-20 rounded-t-xl mt-2">
                            <Award className='text-white'/>
                        </div>
                        
                        <div className="flex flex-col items-center text-center mt-2">
                            <p className="text-sm font-bold text-gray-200">Budi</p>
                            <div className="flex items-center gap-1">
                            
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#8B4513" stroke="#8B4513" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <p className="text-gray-300 text-xs font-semibold">7,900 Poin</p>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className="p-2 grid grid-cols-1 gap-2">
                    <div className="flex items-center bg-background border border-gray-700 rounded-lg p-2 shadow-xl px-6">
                            <span className="text-xl font-bold text-slate-400">4</span>
                            
                        
                            
                            <div className="flex-grow ml-4">
                            <p className="font-semibold text-white text-sm font-mono">Budi Santoso</p>
                            </div>
                            
                            <div className="text-right">
                            <p className="text-md font-bold text-white">12,150</p>
                            <p className="text-xs font-semibold text-slate-400 font-mono">POIN</p>
                            </div>
                    </div>

                    <div className="flex items-center bg-background border border-gray-700  rounded-lg p-2 shadow-xl px-6">
                            <span className="text-xl font-bold text-slate-400">4</span>
                            
                        
                            
                            <div className="flex-grow ml-4">
                            <p className="font-semibold text-white text-sm font-mono">Budi Santoso</p>
                            </div>
                            
                            <div className="text-right">
                            <p className="text-md font-bold text-white">12,150</p>
                            <p className="text-xs font-semibold text-slate-400 font-mono">POIN</p>
                            </div>
                    </div>

                    <div className="flex items-center bg-background border border-gray-700  rounded-lg p-2 shadow-xl px-6">
                            <span className="text-xl font-bold text-slate-400">4</span>
                            
                        
                            
                            <div className="flex-grow ml-4">
                            <p className="font-semibold text-white text-sm font-mono">Budi Santoso</p>
                            </div>
                            
                            <div className="text-right">
                            <p className="text-md font-bold text-white">12,150</p>
                            <p className="text-xs font-semibold text-slate-400 font-mono">POIN</p>
                            </div>
                    </div>
                </div>


                
           </div>
        </div>
    )
}

export default LeaderboardPage;