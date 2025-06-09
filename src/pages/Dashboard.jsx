import { Award, Flag, Layers, MapPin, Star, Sun } from "react-feather";
import NavDashboard from "../fragments/navDashboard";
import DarkModeToggle from "../component/darkMode";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "react-feather";
import { useState, useEffect } from "react";

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

  return (
    <div className="h-[9999px] bg-background ">
      <NavDashboard />
      <div className="lg:w-3/4 lg:absolute lg:right-0">
        <div className="w-full p-4 flex justify-end">
          <DarkModeToggle />
        </div>
        <div className="sm:flex md:justify-between gap-4 lg:w-[95%] s:mx-3">
          <div className="md:p-8 rounded-xl  md:border md:border-[#393838]">
            <div className="w-full p-4">
              <img
                src="https://i.pravatar.cc/150?img=60"
                alt=""
                className="rounded-full"
              />
              <h1 className="text-white text-2xl font-bold mt-2 font-mono">
                Halo,Randi Permana!
              </h1>
              <p className="text-gray-300 leading-4">
                Selamat kamu sudah menyelesaikan 3 aksi hijau minggu ini
              </p>
              <p className="text-gray-300">Total poin: 2000</p>
            </div>
            <button className="w-[95%] p-3 rounded-xl mx-auto flex justify-center bg-secondary hover:bg-[#223a2d]">
              <p className="text-gray-200 font-semibold">Lihat Profile</p>
            </button>
          </div>

          <div className="md:flex md:flex-col rounded-xl md:border md:border-[#393838] p-3">
            <div className="p-3 flex items-center gap-2">
              <div className="bg-secondary rounded-lg w-10 p-2 flex justify-center">
                <Award color="#d1d5dc" />
              </div>
              <p className="text-gray-300 text-xl font-bold font-mono">
                Papan Peringkat Mingguan
              </p>
            </div>

            <div className="flex justify-between md:justify-evenly p-4 gap-3 ">
              <div className="flex  flex-col items-center">
                <img
                  src="https://i.pravatar.cc/150?img=60"
                  alt=""
                  className="w-20 rounded-2xl z-0 border-2 border-primary"
                />
                <div className="flex justify-center">
                  <div className="z-20 bg-primary flex justify-center items-center w-10 -mt-2 rounded-md border-3 border-background">
                    <Award size="10px" color="white" />
                    <p className="text-xs font-semibold text-gray-300">3</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm text-gray-300">Randi Permana</p>
                  <div className="flex items-center">
                    <Star color="#a9abb0" size="12px" />
                    <p className="text-[#a9abb0] text-[14px] font-semibold">
                      2000PTS
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex  flex-col items-center -translate-y-4">
                <img
                  src="https://i.pravatar.cc/150?img=10"
                  alt=""
                  className="w-20 rounded-2xl z-0 border-2 border-primary"
                />
                <div className="flex justify-center">
                  <div className="z-20 bg-primary flex justify-center items-center w-10 -mt-2 rounded-md border-3 border-background">
                    <Award size="10px" color="white" />
                    <p className="text-xs font-semibold text-gray-300">3</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm text-gray-300">Randi Permana</p>
                  <div className="flex items-center">
                    <Star color="#a9abb0" size="12px" />
                    <p className="text-[#a9abb0] text-[14px] font-semibold">
                      2000PTS
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex   flex-col items-center">
                <img
                  src="https://i.pravatar.cc/150?img=16"
                  alt=""
                  className="w-20 rounded-2xl z-0 border-2 border-primary"
                />
                <div className="flex justify-center">
                  <div className="z-20 bg-primary flex justify-center items-center w-10 -mt-2 rounded-md border-3 border-background">
                    <Award size="10px" color="white" />
                    <p className="text-xs font-semibold text-gray-300">3</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm text-gray-300">Randi Permana</p>
                  <div className="flex items-center">
                    <Star color="#a9abb0" size="12px" />
                    <p className="text-[#a9abb0] text-[14px] font-semibold">
                      2000PTS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 pl-4">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.pravatar.cc/150?img=16"
                  alt=""
                  className="w-15 rounded-2xl z-0 border-2 border-primary"
                />
                <div className="flex justify-center">
                  <div className="z-20 bg-primary flex justify-center items-center w-10 -mt-2 rounded-md border-3 border-background">
                    <Award size="10px" color="white" />
                    <p className="text-xs font-semibold text-gray-300">3</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className="text-md text-gray-300">Randi Permana</p>
                <div className="flex items-center">
                  <Star color="#a9abb0" size="12px" />
                  <p className="text-[#a9abb0] text-[14px] font-semibold">
                    2000PTS
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3  pl-4 mt-2">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.pravatar.cc/150?img=16"
                  alt=""
                  className="w-15 rounded-2xl z-0 border-2 border-primary"
                />
                <div className="flex justify-center">
                  <div className="z-20 bg-primary flex justify-center items-center w-10 -mt-2 rounded-md border-3 border-background">
                    <Award size="10px" color="white" />
                    <p className="text-xs font-semibold text-gray-300">3</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <p className="text-md text-gray-300">Randi Permana</p>
                <div className="flex items-center">
                  <Star color="#a9abb0" size="12px" />
                  <p className="text-[#a9abb0] text-[14px] font-semibold">
                    2000PTS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 flex items-center gap-2">
          <div className="bg-secondary rounded-lg w-10 p-2 flex justify-center">
            <Flag color="#d1d5dc" />
          </div>
          <p className="text-gray-300 font-bold font-mono text-2xl leading-7">
            Ayo Segera Laporkan Aksi Hijau Kamu
          </p>
        </div>

        <button className="w-[95%] p-3 rounded-xl mx-auto flex justify-center bg-primary ">
          <p className="text-gray-900 text-lg font-bold ">
            Lapor Aksi Hijau Kamu
          </p>
        </button>

        <div className=" mt-4 ">
          <div className="p-3 flex items-center gap-2">
            <div className="bg-secondary rounded-lg w-10 p-2 flex justify-center">
              <Layers color="#d1d5dc" />
            </div>
            <p className="text-gray-300 font-bold font-mono text-2xl leading-7">
              Aksi Hari Ini
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto md:w-[98%] gap-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
