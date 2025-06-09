import {
  Crown,
  Star,
  Trophy,
  Medal,
  Award,
  UserX,
  Rocket,
  Loader,
  AlertCircle,
} from "lucide-react";
import NavDashboard from "../fragments/navDashboard";
import React, { useState, useEffect, useCallback } from "react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

function LeaderboardPageGemini() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [activeTab, setActiveTab] = useState("rt"); // Default ke 'rt'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { session } = useAuth();
  const API_BACKEND_URL =
    import.meta.env.VITE_API_BACKEND_URL || "http://localhost:3321";

  const fetchLeaderboard = useCallback(async () => {
    if (!session) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_BACKEND_URL}/api/wilayah?tingkat=${activeTab}`,
        {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Gagal memuat data leaderboard.");
      }

      const sortedData = [...data].sort(
        (a, b) => (b.points || 0) - (a.points || 0)
      );
      const finalData = sortedData.map((user, index) => ({
        ...user,
        rank: index + 1,
      }));

      setLeaderboardData(finalData);
    } catch (err) {
      console.error("Error fetching leaderboard:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [session, activeTab]);
  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  const topThree = leaderboardData.slice(0, 3);
  const restOfLeaderboard = leaderboardData.slice(3);

  const winner1 = topThree.find((user) => user.rank === 1);
  const winner2 = topThree.find((user) => user.rank === 2);
  const winner3 = topThree.find((user) => user.rank === 3);

  return (
    <div className="min-h-screen bg-background ">
      <NavDashboard />
      <div className="lg:w-3/4 lg:absolute lg:right-0 pb-24">
        {" "}
        <div className=" p-4 flex items-center gap-2">
          <Trophy size="26px" color="#FFC107" />
          <h2 className="text-gray-200 font-mono text-2xl">Papan Peringkat</h2>
        </div>
        <div className="grid grid-cols-3 mb-10 m-2 bg-gray-800 rounded-full p-1 shadow-md">
          {["RT", "RW", "Kelurahan"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`p-2 rounded-full font-semibold text-xs lg:text-base transition-colors duration-300 ${
                activeTab === tab.toLowerCase()
                  ? "bg-primary text-white shadow-lg"
                  : "bg-transparent text-gray-400 hover:bg-gray-700"
              }`}
            >
              Tingkat {tab}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="flex justify-center items-center p-10">
            <Loader className="animate-spin text-primary" size={48} />
          </div>
        ) : error ? (
          <div className="text-center p-10 bg-red-900 bg-opacity-30 rounded-lg m-4">
            <AlertCircle className="mx-auto text-red-500" size={40} />
            <h3 className="mt-2 font-bold text-red-400">Gagal Memuat Data</h3>
            <p className="text-gray-400 mt-1">{error}</p>
          </div>
        ) : leaderboardData.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="flex justify-around items-end p-4 gap-3">
              {winner2 ? (
                <PodiumItem user={winner2} />
              ) : (
                <PlaceholderPodium rank={2} />
              )}
              {winner1 ? (
                <PodiumItem user={winner1} />
              ) : (
                <PlaceholderPodium rank={1} />
              )}
              {winner3 ? (
                <PodiumItem user={winner3} />
              ) : (
                <PlaceholderPodium rank={3} />
              )}
            </div>

            <div className="p-2 grid grid-cols-1 gap-2">
              {restOfLeaderboard.map((user) => (
                <RankItem key={user.id || user.name} user={user} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const PodiumItem = ({ user }) => {
  const styles = {
    1: {
      border: "border-amber-400",
      shadow: "shadow-amber-400",
      bgGradient: "from-yellow-600 to-yellow-400",
      rankBg: "bg-amber-400",
      icon: <Trophy className="text-white" />,
      crownIcon: <Crown size="16px" className="text-white" fill="white" />,
    },
    2: {
      border: "border-gray-400",
      shadow: "shadow-gray-400",
      bgGradient: "from-gray-600 to-gray-400",
      rankBg: "bg-gray-400",
      icon: <Medal className="text-white" />,
      crownIcon: <Medal size="12px" className="text-white" />,
    },
    3: {
      border: "border-amber-700",
      shadow: "shadow-amber-800",
      bgGradient: "from-amber-700 to-amber-500",
      rankBg: "bg-amber-700",
      icon: <Award className="text-white" />,
      crownIcon: <Award size="12px" className="text-white" />,
    },
  };
  const style = styles[user.rank];

  return (
    <div
      className={`flex flex-col items-center w-1/3 ${
        user.rank === 1 ? "-translate-y-5" : ""
      }`}
    >
      <img
        src={user.avatar_url || `https://i.pravatar.cc/150?u=${user.id}`}
        alt={`Avatar Juara ${user.rank}`}
        className={`object-cover rounded-2xl z-0 border-2 ${
          style.border
        } shadow-lg ${style.shadow} ${
          user.rank === 1
            ? "w-24 h-24 md:w-28 md:h-28"
            : "w-20 h-20 md:w-24 md:h-24"
        }`}
      />
      <div className="flex justify-center w-full">
        <div
          className={`z-10 flex justify-center items-center gap-1 w-12 -mt-4 rounded-md border-[3px] border-background ${style.rankBg}`}
        >
          {style.crownIcon}
          <p className="text-sm font-semibold text-white">{user.rank}</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center mt-2">
        <p
          className={`font-bold text-gray-200 ${
            user.rank === 1 ? "text-base text-white" : "text-sm"
          }`}
        >
          {user.nama}
        </p>
        <div className="flex items-center gap-1">
          <Star size={12} className="text-yellow-400" fill="#f7b733" />
          <p className="text-gray-300 text-xs font-semibold">
            {user.points.toLocaleString()} Poin
          </p>
        </div>
      </div>
    </div>
  );
};

const PlaceholderPodium = ({ rank }) => (
  <div className="flex flex-col items-center w-1/3 opacity-50">
    <div
      className={`flex items-center justify-center bg-gray-700 border-2 border-dashed border-gray-500 rounded-2xl ${
        rank === 1 ? "w-24 h-24 md:w-28 md:h-28" : "w-20 h-20 md:w-24 md:h-24"
      }`}
    >
      <UserX className="text-gray-400" size={rank === 1 ? 48 : 40} />
    </div>
    <div className="text-center mt-2">
      <p className="text-sm font-bold text-gray-500">Posisi Kosong</p>
    </div>
  </div>
);

const RankItem = ({ user }) => (
  <div className="flex items-center bg-background border border-gray-700 rounded-lg p-2 shadow-lg px-4">
    <span className="text-xl font-bold text-slate-400 w-8 text-center">
      {user.rank}
    </span>
    <img
      src={user.avatar_url || `https://i.pravatar.cc/150?u=${user.id}`}
      alt={`Avatar ${user.name}`}
      className="w-10 h-10 rounded-full ml-2 object-cover"
    />
    <div className="flex-grow ml-4">
      <p className="font-semibold text-white text-sm font-mono">{user.name}</p>
    </div>
    <div className="text-right">
      <p className="text-md font-bold text-white">
        {user.points.toLocaleString()}
      </p>
      <p className="text-xs font-semibold text-slate-400 font-mono">POIN</p>
    </div>
  </div>
);

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center text-center p-10 mt-10">
    <Rocket size={64} className="text-green-500 mb-4" />
    <h3 className="text-xl font-bold text-white font-mono">
      Jadilah yang Pertama!
    </h3>
    <p className="text-gray-400 mt-2 max-w-sm">
      Saat ini belum ada peringkat di tingkatan ini. Selesaikan misimu dan rebut
      posisi puncak di lingkunganmu!
    </p>
    <Link
      to="/misi"
      className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
    >
      Mulai Misi
    </Link>
  </div>
);

export default LeaderboardPageGemini;
