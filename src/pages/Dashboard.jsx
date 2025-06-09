import React from 'react';
import { Link } from "react-router-dom";
import { Award as AwardFeather, Flag, Layers } from "react-feather";
import { User, Award, Medal, Star, Trophy } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import NavDashboard from "../fragments/navDashboard";
import DarkModeToggle from "../component/darkMode";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "react-feather";
import { useState, useEffect } from "react";


const topThree = [
    { id: 1, name: 'Randi Permana', points: 12300, rank: 1, avatar: 'https://i.pravatar.cc/150?img=10' },
    { id: 2, name: 'Rina', points: 8500, rank: 2, avatar: 'https://i.pravatar.cc/150?img=60' },
    { id: 3, name: 'Budi', points: 7900, rank: 3, avatar: 'https://i.pravatar.cc/150?img=16' },
];

const PodiumItem = ({ user }) => {
    const styles = {
        1: { border: 'border-amber-400', shadow: 'shadow-amber-400', bgGradient: 'from-yellow-600 to-yellow-400', rankBg: 'bg-amber-400', icon: <Trophy className="text-white"/>, crownIcon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="white" strokeWidth="1.5"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>},
        2: { border: 'border-gray-400', shadow: 'shadow-gray-400', bgGradient: 'from-gray-600 to-gray-400', rankBg: 'bg-gray-400', icon: <Medal className='text-white'/>, crownIcon: <Medal size="12px" className='text-white'/> },
        3: { border: 'border-amber-700', shadow: 'shadow-amber-800', bgGradient: 'from-amber-700 to-amber-500', rankBg: 'bg-amber-700', icon: <Award className='text-white'/>, crownIcon: <Award size="12px" className='text-white'/> },
    };
    const style = styles[user.rank];

    return (
        <div className={`flex flex-col items-center w-1/3 ${user.rank === 1 ? '-translate-y-5' : ''}`}>
            <img src={user.avatar} alt={`Avatar Juara ${user.rank}`} className={`object-cover rounded-2xl z-0 border-2 ${style.border} shadow-lg ${style.shadow} ${user.rank === 1 ? 'w-24 h-24 md:w-28 md:h-28' : 'w-20 h-20 md:w-24 md:h-24'}`}/>
            <div className="flex justify-center w-full">
                <div className={`z-10 flex justify-center items-center gap-1 w-12 -mt-4 rounded-md border-[3px] border-background ${style.rankBg}`}>
                    {style.crownIcon}
                    <p className="text-sm font-semibold text-white">{user.rank}</p>
                </div>
            </div>
            <div className={`h-20 bg-gradient-to-t flex justify-center items-end p-2 w-20 rounded-t-xl mt-2 ${style.bgGradient}`}>
                {style.icon}
            </div>
            <div className="flex flex-col items-center text-center mt-2">
                <p className={`font-bold text-gray-200 ${user.rank === 1 ? 'text-base text-white' : 'text-sm'}`}>{user.name}</p>
                <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-400" fill="#f7b733"/>
                    <p className="text-gray-300 text-xs font-semibold">{user.points.toLocaleString()} Poin</p>
                </div>
            </div>
        </div>
    );
};

function Dashboard() {
  const { session, user, profile, loading: authLoading } = useAuth();
  const [kegiatanStats, setKegiatanStats] = useState(null);
  const [statsLoading, setStatsLoading] = useState(true);

  const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

  useEffect(() => {
    if (session) {
      const fetchStats = async () => {
        setStatsLoading(true);
        try {
          const response = await fetch(
            `${API_BACKEND_URL}/api/statistik-saya`,
            {
              headers: {
                Authorization: `Bearer ${session.access_token}`,
              },
            }
          );
          const data = await response.json();
          if (!response.ok) {
            throw new Error(data.message || "Gagal memuat statistik.");
          }
          setKegiatanStats(data);
        } catch (error) {
          console.error("Error fetching stats:", error);
        } finally {
          setStatsLoading(false);
        }
      };
      fetchStats();
    } else {
      setStatsLoading(false);
    }
  }, [session]);

  if (authLoading || statsLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-background">
        <Loader className="animate-spin text-primary" size={48} />
        <p className="ml-4 text-lg text-gray-300">Memuat data...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div>
        Silakan <a href="/login">login</a>.
      </div>
    );
  }
  const winner1 = topThree.find(user => user.rank === 1);
    const winner2 = topThree.find(user => user.rank === 2);
    const winner3 = topThree.find(user => user.rank === 3);

    return (
        <div className="h-full bg-background pb-10">
            <NavDashboard/>
            <div className="lg:w-3/4 lg:absolute lg:right-0">
                <div className="w-full p-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img src="https://i.pravatar.cc/150?img=60" alt="" className="w-12 rounded-lg"/>
                        <div className="">
                            <h2 className="text-gray-400 font-bold text-xs">Halo, Randi Permana</h2>
                            <p className="text-gray-200 font-semibold text-lg -mt-1">Mulai Aksi Hijaumu</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-secondary h-fit p-2 rounded-lg">
                            <DarkModeToggle/>
                        </div>
                        <div className="bg-secondary h-fit p-2 rounded-lg">
                            <User className="text-white"/>
                        </div>
                    </div>
                </div>

                <div className="md:justify-between gap-4 lg:w-[95%] s:mx-3">
                    <div className="lg:grid lg:grid-cols-2 mb-5 lg:items-center">
                        <div className="m-4 lg:flex lg:items-center lg:flex-col lg:justify-evenly h-full">
                            <img src="/benner.png" alt="" className="rounded-xl shadow-xl"/>
                            <button className="w-[95%] p-3 rounded-xl mx-auto lg:flex justify-center bg-primary hidden">
                                <p className="text-gray-900 text-lg font-bold ">Lihat Papan Peringkat</p>
                            </button>
                        </div>

                        <div className="px-5">
                            <div className="flex justify-between items-center">
                                <h2 className="text-gray-300 font-semibold text-lg">Misi Tersedia</h2>
                                <Link to="/misi" className="text-gray-400 font-semibold text-xs">Lihat Semua</Link>
                            </div>
                            <div className="overflow-visible ">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={8} 
                                    slidesPerView={2.1}
                                    grabCursor={true}
                                >
                                    <SwiperSlide>
                                        <div className="bg-secondary rounded-lg border-b-2 border-gray-500 shadow-xl">
                                            <img src="/sepeda.png" alt="" className="rounded-t-lg" />
                                            <div className="p-2">
                                                <h2 className="text-gray-300 text-xl font-bold">Ekspedisi Gowes Pagi</h2>
                                                <div className="flex items-center">
                                                    <p className="text-green-400 font-semibold font-mono">Mobilitas Hijau</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide>
                                        <div className="bg-secondary rounded-lg border-b-2 border-gray-500 shadow-xl">
                                            <img src="/lampu.png" alt="" className="rounded-t-lg" />
                                            <div className="p-2">
                                                <h2 className="text-gray-300 text-xl font-bold">Operasi Senyap Listrik</h2>
                                                <div className="flex items-center">
                                                    <p className="text-yellow-400 font-semibold font-mono">Hemat Energi</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                    <SwiperSlide>
                                        <div className="bg-secondary rounded-lg border-b-2 border-gray-500 shadow-xl">
                                            <img src="/botol.png" alt="" className="rounded-t-lg" />
                                            <div className="p-2">
                                                <h2 className="text-gray-300 text-xl font-bold">Misi Botol Abadi Bersih</h2>
                                                <div className="flex items-center">
                                                    <p className="text-red-400 font-semibold font-mono">Kebersihan</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>


                    <div className="lg:grid grid-cols-2 ">
                        <div className="md:flex md:flex-col rounded-xl md:border md:border-[#393838] p-3">
                                <div className="p-3 flex items-center gap-2">
                                    <div className="bg-secondary rounded-lg w-10 p-2 flex justify-center">
                                            <AwardFeather color="#d1d5dc"/>
                                    </div>
                                    <p className="text-gray-300 text-xl font-bold font-mono">Papan Peringkat Kelurahan</p>
                                </div>
                                
                                <div className="flex justify-around items-end p-4 gap-3 mt-4">
                                    {winner2 && <PodiumItem user={winner2} />}
                                    {winner1 && <PodiumItem user={winner1} />}
                                    {winner3 && <PodiumItem user={winner3} />}
                                </div>
                        </div>
                        
                   
                
                        <div className="">
                           
                        </div>
                    </div>

                </div>

                <div className=" mt-4 ">
                    <div className="p-3 flex items-center gap-2">
                        <div className="bg-secondary rounded-lg w-10 p-2 flex justify-center">
                            <Layers color="#d1d5dc"/>
                        </div>
                        <p className="text-gray-300 font-bold font-mono text-2xl leading-7">Aksi Hari Ini</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto md:w-[98%] gap-4">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
