import { Layers, Navigation, Trash2, Zap } from "react-feather";
import DarkModeToggle from "../component/darkMode";
import NavDashboard from "../fragments/navDashboard";
import {
  CardMobilitasHijau,
  CardHematEnergi,
  CardKebersihan,
} from "../fragments/cardMisi";
import { dataMisi } from "../utils/dataMisi";
import { useState, useContext } from "react";
import { MisiSubmitContext } from "../context/misiSubmitContext";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AlertLogin from "../component/alertLogin";

function MisiPage() {
  const mobilitasHijau = dataMisi[0].mobilitasHijau;
  const hematEnergi = dataMisi[0].hematEnergi;
  const kebersihan = dataMisi[0].kebersihan;
  const { aktifSubmit, setAktifSubmit } = useContext(MisiSubmitContext);
  const { session } = useAuth();

  if (!session) {
    return (
      <div className="w-full h-screen justify-center items-center">
        <AlertLogin />
      </div>
    );
  }

  return (
    <div className="h-fit pb-30 bg-background">
      <NavDashboard />
      <div className="lg:w-3/4 lg:absolute lg:right-0">
        <div className="p-2 pt-10">

          <div className="flex items-center gap-2 mb-4">
            <Layers className="text-primary"/>
            <h1 className="text-gray-200 text-2xl font-mono font-bold">
              PETUALANGAN HIJAUMU
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <div className="bg-gray-700 p-2 rounded-md border border-gray-700 shadow-lg flex items-center gap-1">
                <Navigation className="text-green-400" />
                <h2 className="text-green-400 font-mono font-bold">
                  MOBILITAS HIJAU
                </h2>
              </div>
              {mobilitasHijau.map((data, index) => (
                <Link
                  key={index}
                  to="/SubmitAksi"
                  onClick={() => setAktifSubmit(data)}
                  className="bg-secondary shadow-xl p-4 border-l-4 border-green-400"
                >
                  <CardMobilitasHijau title={data.judul} points={data.point} />
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-gray-700 p-2 rounded-md border border-gray-700 shadow-lg flex items-center gap-1">
                <Zap className="text-yellow-400" />
                <h2 className="text-yellow-400 font-mono font-bold">
                  HEMAT ENERGI
                </h2>
              </div>
              {hematEnergi.map((data, index) => (
                <Link
                  key={index}
                  to="/SubmitAksi"
                  onClick={() => setAktifSubmit(data)}
                  className="bg-secondary shadow-xl p-4 border-l-4 border-green-400"
                >
                  <CardHematEnergi title={data.judul} points={data.point} />
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-gray-700 p-2 rounded-md border border-gray-700 shadow-lg flex items-center gap-1">
                <Trash2 className="text-red-400" />
                <h2 className="text-red-400 font-mono font-bold">KEBERSIHAN</h2>
              </div>

              {kebersihan.map((data, index) => (
                <Link
                  key={index}
                  to="/SubmitAksi"
                  onClick={() => setAktifSubmit(data)}
                  className="bg-secondary shadow-xl p-4 border-l-4 border-green-400"
                >
                  <CardKebersihan title={data.judul} points={data.point} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MisiPage;
