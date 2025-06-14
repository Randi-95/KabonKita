import React from "react";
import { Link } from "react-router-dom";
import { Award as AwardFeather, Clock, Flag, Layers } from "react-feather";
import { User, Award, Medal, Star, Trophy } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import NavDashboard from "../fragments/navDashboard";
import DarkModeToggle from "../component/darkMode";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "react-feather";
import { useState, useEffect, useCallback } from "react";
import { PlaceholderPodium } from "./Leaderboard";
import AlertLogin from "../component/alertLogin";

const PodiumItem = ({ user }) => {
  const styles = {
    1: {
      border: "border-amber-400",
      shadow: "shadow-amber-400",
      bgGradient: "from-yellow-600 to-yellow-400",
      rankBg: "bg-amber-400",
      icon: <Trophy className="text-white" />,
      crownIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#FFD700"
          stroke="white"
          strokeWidth="1.5"
        >
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
        </svg>
      ),
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
        src={user.profile_url}
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
      <div
        className={`h-20 bg-gradient-to-t flex justify-center items-end p-2 w-20 rounded-t-xl mt-2 ${style.bgGradient}`}
      >
        {style.icon}
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
            {user.points || 0} Poin
          </p>
        </div>
      </div>
    </div>
  );
};

function Dashboard() {
  const { session, user, profile, loading: authLoading } = useAuth();
  const [kegiatanStats, setKegiatanStats] = useState(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(true);

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

  const fetchLeaderboard = useCallback(async () => {
    if (!session) {
      setLeaderboardLoading(false);
      return;
    }
    setLeaderboardLoading(true);
    try {
      const response = await fetch(
        `${API_BACKEND_URL}/api/wilayah?tingkat=kelurahan`,
        {
          headers: { Authorization: `Bearer ${session.access_token}` },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Gagal memuat leaderboard.");
      }
      const sortedData = [...data].sort(
        (a, b) => (b.points || 0) - (a.points || 0)
      );
      const finalData = sortedData.map((user, index) => ({
        ...user,
        rank: index + 1,
      }));
      setLeaderboardData(finalData);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    } finally {
      setLeaderboardLoading(false);
    }
  }, [session]);

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  if (!session) {
    return (
      <div className="w-full h-screen justify-center items-center">
        <AlertLogin />
      </div>
    );
  }
  
  const topThree = leaderboardData.slice(0, 3);
  const winner1 = topThree.find((user) => user.rank === 1);
  const winner2 = topThree.find((user) => user.rank === 2);
  const winner3 = topThree.find((user) => user.rank === 3);

  return (
    <div className="h-full bg-background pb-10">
      <NavDashboard />
      <div className="lg:w-3/4 lg:absolute lg:right-0">
        <div className="w-full p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={profile?.profile_url}
              alt=""
              className="w-12 rounded-lg"
            />
            <div className="">
              {authLoading ? (
                <>
                  <h2 className="text-gray-400 font-bold text-xs">memuat..</h2>
                </>
              ) : (
                <h2 className="text-gray-400 font-bold text-xs">
                  Halo, {profile?.nama}
                </h2>
              )}
              <p className="text-gray-200 font-semibold text-lg -mt-1">
                Mulai Aksi Hijaumu
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to="/riwayat" className="bg-secondary h-fit p-2 rounded-lg">
              <Clock className="text-white" />
            </Link>
            <Link to="/profile" className="bg-secondary h-fit p-2 rounded-lg">
              <User className="text-white" />
            </Link>
          </div>
        </div>

        <div className="md:justify-between gap-4 lg:w-[95%] s:mx-3">
          <div className="lg:grid lg:grid-cols-2 mb-5 lg:items-center">
            <div className="m-4 lg:flex lg:items-center lg:flex-col lg:justify-evenly h-full">
              <img src="/benner.webp" alt="" className="rounded-xl shadow-xl" />
              <Link
                to="/peringkat"
                className="w-[95%] p-3 rounded-xl mx-auto lg:flex justify-center bg-primary hidden"
              >
                <p className="text-gray-900 text-lg font-bold ">
                  Lihat Papan Peringkat
                </p>
              </Link>
            </div>

            <div className="px-5">
              <div className="flex justify-between items-center">
                <h2 className="text-gray-300 font-semibold text-lg">
                  Misi Tersedia
                </h2>
                <Link
                  to="/misi"
                  className="text-gray-400 font-semibold text-xs"
                >
                  Lihat Semua
                </Link>
              </div>
              <div className="overflow-visible ">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={8}
                  breakpoints={{
                    0: {
                      slidesPerView: 1.4,
                    },
                    360: {
                      slidesPerView: 2.1,
                    },
                  }}
                  grabCursor={true}
                >
                  <SwiperSlide>
                    <div className="bg-secondary rounded-lg border-b-2 border-gray-500 shadow-xl">
                      <img src="/sepeda.webp" alt="" className="rounded-t-lg" />
                      <div className="p-2">
                        <h2 className="text-gray-300 text-xl font-bold">
                          Ekspedisi Gowes Pagi
                        </h2>
                        <div className="flex items-center">
                          <p className="text-green-400 text-xs md:text-lg font-semibold font-mono">
                            Mobilitas Hijau
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-secondary rounded-lg border-b-2 border-gray-500 shadow-xl">
                      <img src="/lampu.webp" alt="" className="rounded-t-lg" />
                      <div className="p-2">
                        <h2 className="text-gray-300 text-xl font-bold">
                          Operasi Senyap Listrik
                        </h2>
                        <div className="flex items-center">
                          <p className="text-yellow-400 text-xs md:text-lg font-semibold font-mono">
                            Hemat Energi
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-secondary rounded-lg border-b-2 border-gray-500 shadow-xl">
                      <img src="/botol.webp" alt="" className="rounded-t-lg" />
                      <div className="p-2">
                        <h2 className="text-gray-300 text-xl font-bold">
                          Misi Botol Abadi Bersih
                        </h2>
                        <div className="flex items-center">
                          <p className="text-red-400 text-xs md:text-lg font-semibold font-mono">
                            Kebersihan
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div className="lg:grid grid-cols-2 ">
            <div className="md:flex md:flex-col rounded-xl  p-3">
              <div className="p-3 flex items-center gap-2">
                <div className="bg-secondary rounded-lg w-10 p-2 flex justify-center">
                  <AwardFeather color="#d1d5dc" />
                </div>
                <p className="text-gray-300 text-xl font-bold font-mono">
                  Papan Peringkat Kelurahan
                </p>
              </div>

              <div className="flex justify-around items-end p-4 gap-3 mt-4">
                {authLoading || statsLoading ? (
                  <div className="flex justify-center items-center p-10">
                    <Loader className="animate-spin text-primary" size={48} />
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>

            <div className="px-4 flex flex-col justify-evenly ">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br w-full from-primary via-primary to-green-900 rounded-2xl p-6 relative overflow-hidden">
                  <div className="mb-6 relative h-24 flex items-center justify-center">
                    <div className="relative">
                      <div className="flex items-end space-x-1">
                        <Award className="text-white/60" size="50px" />
                        <Star
                          className="text-white/60 -translate-x-2 translate-y-4"
                          size="30px"
                        />
                      </div>

                      <div className="absolute -right-6 -top-10">
                        <Trophy className="text-white/60" size="50px" />
                      </div>

                      <div className="absolute -left-4 top-0 w-6 h-6 bg-white/20 rounded-full"></div>
                      <div className="absolute -right-2 bottom-2 w-4 h-4 bg-white/15 rounded-full"></div>
                      <div className="absolute -left-40 bottom-2 w-10 h-10 bg-white/15 rounded-full"></div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-gray-800 rounded-xl p-4">
                    <h3 className="text-white font-bold text-lg mb-3">
                      Jejak Kebaikanmu
                    </h3>

                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                      {authLoading ? (
                        <span className="text-gray-300 text-sm">
                          Memuat data...
                        </span>
                      ) : (
                        <span className="text-gray-300 text-sm">
                          Total {profile?.points || 0} Poin Hijau telah
                          terkumpul.
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute top-8 right-12 w-6 h-6 bg-white/5 rounded-full"></div>
                  <div className="absolute bottom-20 left-4 w-8 h-8 bg-white/8 rounded-full"></div>
                </div>
              </div>
              <Link
                to="/misi"
                className="w-full  p-3 rounded-xl  flex justify-center bg-primary lg:mb-0 mb-20 mt-6 lg:mt-0"
              >
                <p className="text-gray-900 text-lg font-bold ">
                  Laporkan Aksi Hijau Kamu
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
