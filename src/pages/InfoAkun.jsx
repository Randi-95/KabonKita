import { ChevronLeft, MapPin, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AlertLogin from "../component/alertLogin";
import { Loader } from "react-feather";

function PageInfoAkun() {
  const { profile, session, loading } = useAuth();

  if (!session) {
    return (
      <div className="w-full h-screen justify-center items-center">
        <AlertLogin />
      </div>
    );
  }

  const badgeLevel = (point) => {
    let level = 0;
    let peringkat = "(tidak ada)"

    if (point >= 5000) {
      level = 5;
      peringkat = "(Avatar)"
    } else if (point >= 2500) {
      level = 4;
      peringkat = "(Master)"
    } else if (point >= 1000) {
      level = 3;
      peringkat = "(Pakar)"
    } else if (point >= 500) {
      level = 2;
      peringkat = "(Penggiat)"
    } else if (point >= 250) {
      level = 1;
      peringkat = "(Pemula)"
    }

    return {level, peringkat};
  };

  const {level, peringkat} = badgeLevel(profile?.points)

  return (
    <div className="bg-background min-h-screen font-sans">
      <header className="flex items-center p-4">
        <Link
          to="/profile"
          className="p-2 rounded-full transition-colors hover:bg-white/10"
        >
          <ChevronLeft className="text-gray-200" size={24} />
        </Link>
        <h1 className="flex-grow text-center text-xl font-bold text-white mr-10">
          Informasi Akun
        </h1>
      </header>

      <main className="p-4 flex flex-col gap-5">
        <div className="bg-secondary p-5 rounded-xl flex items-center gap-4 border border-primary/20">
          <img
            src={profile?.profile_url}
            className="w-20 h-20 rounded-full border-2 border-primary"
          />
          <div>
            {loading ? (
              <h2 className="text-2xl font-bold text-white">Memuat Data...</h2>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {profile?.nama}
                </h2>
                <p className="text-sm text-primary">
                  {session?.user.user_metadata.email}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-secondary p-5 rounded-xl border border-primary/20">
          <div className="flex items-start gap-4 py-4">
            <div className="mt-1 text-primary">
              <MapPin size={20} />
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-400">Alamat</p>
              <div className="text-base text-gray-100 font-medium">
                {loading ? (
                  <p>Memuat Data..</p>
                ) : (
                  <p>{`${profile?.kelurahan} RT 0${profile?.rt}/0${profile?.rw} ${profile?.kecamatan}, ${profile?.kabupaten}`}</p>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-primary/10"></div>

          <div className="flex items-start gap-4 py-4">
            <div className="mt-1 text-primary">
              <Award size={20} />
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-400">Lencana</p>
              <div className="text-base text-gray-100 font-medium">
                <div className="flex items-center gap-x-3 mt-1">
                  <img src={`lencana${level}.png`} alt="Lencana" className="w-12 h-12" />
                  <div>
                    <strong className="text-base font-bold text-primary">
                      Level {level} <span className="text-yellow-400">{peringkat}</span>
                    </strong>
                    <p className="text-xs text-gray-400">Mencapai {profile?.points} poin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PageInfoAkun;
