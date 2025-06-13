import { LogOut, Star, User } from "react-feather";
import DarkModeToggle from "../component/darkMode";
import NavDashboard from "../fragments/navDashboard";
import { Headphones, Info } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "react-feather";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import AlertLogin from "../component/alertLogin";

function ProfilePage() {
  const { session, loading, profile } = useAuth();
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-background">
        <Loader className="animate-spin text-primary" size={48} />
        <p className="ml-4 text-lg text-gray-300">Memuat data...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="w-full h-screen justify-center items-center">
        <AlertLogin />
      </div>
    );
  }

  const handleLogOut = async () => {
    try {
      if (!window.confirm("apakah anda yakin ingin logout")) {
        return;
      }

      const { error } = await supabase.auth.signOut();

      if (error) throw new Error("gagal logout, error:", error);

      navigate("/");
      alert("anda telah berhasil logout");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className=" bg-background h-fit pb-20">
      <NavDashboard />
      <div className="lg:w-3/4 lg:absolute lg:right-0">
        <div className="w-full p-4 flex justify-between items-center">
          <div className="bg-gradient-to-t from-gray-700 to-gray-600 p-2 rounded-lg ">
            <User className="text-white " />
          </div>
          <p className="text-gray-100 font-semibold text-2xl font-mono">
            Profil
          </p>
          <DarkModeToggle />
        </div>

      <div className="flex flex-col gap-20">
        <div className="p-5 flex items-center gap-4 justify-center flex-col">
          
          <div className="flex items-center gap-2">
            <img
              src={profile?.profile_url}
              alt=""
              className="rounded-full w-25 border-2 border-primary"
            />
            <div className="flex flex-col gap-1">
              <p className="text-gray-100 font-semibold text-xl">
                {profile?.nama}
              </p>
              <div className="flex items-center border-2 border-primary w-fit p-1 px-2 gap-2 rounded-lg">
                <Star className="text-primary" size="20px" />
                <p className="text-primary">{profile?.points || 0} Poin</p>
              </div>
            </div>
          </div>
          <button className="w-[80%] p-3 rounded-xl mx-auto shadow-lg flex justify-center bg-secondary ">
            <p className="text-gray-200 text-lg font-bold ">
              Lapor Aksi Hijau Kamu
            </p>
          </button>
        </div>

        

        <div className="h-100 rounded-t-4xl mt-6 w-full bg-secondary p-4 flex flex-col gap-4">
          <button className="flex items-center border-b border-primary justify-between w-full   p-3 hover:bg-green-800 rounded-t-lg focus:outline-none ">
            <div className="flex items-center">
              <User className="text-white" />

              <span className="ml-4 text-lg font-medium text-gray-200">
                Informasi Akun
              </span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="flex items-center border-b border-primary justify-between w-full   p-3 hover:bg-green-800  focus:outline-none ">
            <div className="flex items-center">
              <Info className="text-white" />

              <span className="ml-4 text-lg font-medium text-gray-200">
                Tentang Kami
              </span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button className="flex items-center border-b border-primary justify-between w-full   p-3 hover:bg-green-800  focus:outline-none ">
            <div className="flex items-center">
              <Headphones className="text-white" />

              <span className="ml-4 text-lg font-medium text-gray-200">
                Bantuan
              </span>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <button
            onClick={() => handleLogOut()}
            className="cursor-pointer flex items-center justify-center border-2 border-primary w-full py-4 px-2 gap-2 rounded-lg"
          >
            <LogOut className="text-primary" size="30px" />
            <p className="text-primary text-xl font-semibold">Logout</p>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProfilePage;
