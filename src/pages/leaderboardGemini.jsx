import { Crown, Star, Trophy, Medal, Award, UserX, Rocket } from 'lucide-react';
import NavDashboard from "../fragments/navDashboard";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

// --- DATA DUMMY (SEKARANG TANPA RANK) ---
// Poin sengaja dibuat tidak berurutan untuk membuktikan fungsi sort berjalan
const dummyData = [
  { id: 4, name: 'Budi Santoso', points: 7850, avatar: 'https://i.pravatar.cc/150?img=25' },
  { id: 1, name: 'Randi Permana', points: 12300, avatar: 'https://i.pravatar.cc/150?img=10' },
  { id: 6, name: 'Dewi Ayu', points: 5100, avatar: 'https://i.pravatar.cc/150?img=45' },
  { id: 3, name: 'Budi', points: 7900, avatar: 'https://i.pravatar.cc/150?img=16' },
  { id: 2, name: 'Rina', points: 8500, avatar: 'https://i.pravatar.cc/150?img=60' },
  { id: 5, name: 'Citra Lestari', points: 6400, avatar: 'https://i.pravatar.cc/150?img=31' },
];

function LeaderboardPageGemini() {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [activeTab, setActiveTab] = useState('RT');

    // --- PERUBAHAN UTAMA ADA DI SINI ---
    useEffect(() => {
        // Di sini Anda bisa fetch data dari API yang hanya berisi (id, name, points, avatar)
        const rawData = dummyData; 

        // 1. Urutkan data dari poin tertinggi ke terendah
        // Kita buat salinan array dengan [...rawData] agar tidak mengubah data asli
        const sortedData = [...rawData].sort((a, b) => b.points - a.points);

        // 2. Tambahkan properti 'rank' secara dinamis berdasarkan urutan array
        const finalData = sortedData.map((user, index) => ({
            ...user, // salin semua properti user yang sudah ada
            rank: index + 1, // tambahkan properti rank
        }));

        // 3. Simpan data yang sudah lengkap (dengan rank) ke dalam state
        setLeaderboardData(finalData);
    }, []); // Efek ini hanya berjalan sekali saat komponen dimuat

    // Sisa dari komponen tidak perlu diubah sama sekali
    const topThree = leaderboardData.slice(0, 3);
    const restOfLeaderboard = leaderboardData.slice(3);
    
    const winner1 = topThree.find(user => user.rank === 1);
    const winner2 = topThree.find(user => user.rank === 2);
    const winner3 = topThree.find(user => user.rank === 3);

    return(
        <div className="min-h-screen bg-background ">
            <NavDashboard/>
            <div className="lg:w-3/4 lg:absolute lg:right-0 pb-10">
                <div className=" p-4 flex items-center gap-2">
                    <Trophy size="26px" color="#FFC107"/>
                    <h2 className="text-gray-200 font-mono text-2xl">Papan Peringkat</h2>
                </div>
                
                <div className="grid grid-cols-3 mb-10 m-2 bg-gray-800 rounded-md">
                    {['RT', 'RW', 'Kelurahan'].map(tab => (
                        <div key={tab} onClick={() => setActiveTab(tab)} className={`p-2 rounded-md shadow-lg flex items-center justify-center cursor-pointer transition-colors ${activeTab === tab ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700'}`}>
                            <h2 className="text-green-400 font-mono font-bold text-xs lg:text-lg">
                                Tingkat {tab}
                            </h2>
                        </div>
                    ))}
                </div>

                {leaderboardData.length === 0 ? (
                    <EmptyState />
                ) : (
                    <>
                        <div className="flex justify-around items-end p-4 gap-3">
                            {winner2 ? <PodiumItem user={winner2} /> : <PlaceholderPodium rank={2} />}
                            {winner1 ? <PodiumItem user={winner1} /> : <PlaceholderPodium rank={1} />}
                            {winner3 ? <PodiumItem user={winner3} /> : <PlaceholderPodium rank={3} />}
                        </div>
                        
                        <div className="p-2 grid grid-cols-1 gap-2">
                            {restOfLeaderboard.map(user => (
                                <RankItem key={user.id} user={user} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

// --- TIDAK ADA PERUBAHAN PADA KOMPONEN-KOMPONEN DI BAWAH INI ---
// (PodiumItem, PlaceholderPodium, RankItem, EmptyState tetap sama)

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

const PlaceholderPodium = ({ rank }) => (
    <div className="flex flex-col items-center w-1/3 opacity-50">
        <div className={`flex items-center justify-center bg-gray-700 border-2 border-dashed border-gray-500 rounded-2xl ${rank === 1 ? 'w-24 h-24 md:w-28 md:h-28' : 'w-20 h-20 md:w-24 md:h-24'}`}>
            <UserX className="text-gray-400" size={rank === 1 ? 48 : 40} />
        </div>
        <div className="h-20 bg-gray-700 w-20 rounded-t-xl mt-6 flex justify-center items-center">
            <p className="text-gray-500 text-5xl font-bold">{rank}</p>
        </div>
        <div className="text-center mt-2">
            <p className="text-sm font-bold text-gray-500">Posisi Kosong</p>
            <p className="text-xs text-gray-600">Ajak temanmu!</p>
        </div>
    </div>
);

const RankItem = ({ user }) => (
    <div className="flex items-center bg-background border border-gray-700 rounded-lg p-2 shadow-lg px-4">
        <span className="text-xl font-bold text-slate-400 w-8 text-center">{user.rank}</span>
        <img src={user.avatar} alt={`Avatar ${user.name}`} className="w-10 h-10 rounded-full ml-2 object-cover"/>
        <div className="flex-grow ml-4">
            <p className="font-semibold text-white text-sm font-mono">{user.name}</p>
        </div>
        <div className="text-right">
            <p className="text-md font-bold text-white">{user.points.toLocaleString()}</p>
            <p className="text-xs font-semibold text-slate-400 font-mono">POIN</p>
        </div>
    </div>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center text-center p-10 mt-10">
        <Rocket size={64} className="text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-white font-mono">Jadilah yang Pertama!</h3>
        <p className="text-gray-400 mt-2 max-w-sm">
            Saat ini belum ada peringkat. Selesaikan misimu dan rebut posisi puncak di lingkunganmu!
        </p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Mulai Misi
        </button>
    </div>
);

export default LeaderboardPageGemini;