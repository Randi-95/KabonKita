import { useState, useContext } from "react";
import { X, Paperclip, Camera } from "react-feather";
import { Navigation, Zap, Trash2 } from "react-feather";
import { Link, useNavigate } from "react-router-dom"; // Impor useNavigate untuk redirect
import { MisiSubmitContext } from "../context/misiSubmitContext";
import NavDashboard from "../fragments/navDashboard";
import RingkasanMisi from "../fragments/ringkasanMisi";
import AlertLogin from "../component/alertLogin";
import { useAuth } from "../hooks/useAuth";

function PageSubmit() {
  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const { aktifSubmit } = useContext(MisiSubmitContext);
  const navigate = useNavigate();
  const { session, loading, profile } = useAuth();

  if (!session) {
    return (
      <div className="w-full h-screen justify-center items-center">
        <AlertLogin />
      </div>
    );
  }
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert("Silakan pilih file terlebih dahulu.");
      return;
    }
    alert(`Berhasil submit! File: ${fileName}`);
  };

  if (!aktifSubmit) {
    return (
      <div className="min-h-screen bg-white dark:bg-background flex items-center justify-center">
        <div className="text-center p-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Oops! Tidak ada misi yang dipilih.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Sepertinya Anda me-refresh halaman atau datang ke sini tanpa memilih
            misi terlebih dahulu.
          </p>
          <Link to="/" className="text-blue-500 hover:underline font-semibold">
            &larr; Kembali ke Daftar Misi
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="hidden lg:block">
        <NavDashboard />
      </div>
      <div className="lg:w-3/4 lg:absolute lg:right-0 pt-4">
        <div className="w-full p-4 flex justify-between items-center">
          <p></p>
          <h2 className="text-gray-200 font-bold text-xl">Laporkan Aksimu</h2>
          <Link to="/Home">
            <X className="text-gray-200" />
          </Link>
        </div>

        <div className="p-4">
          <RingkasanMisi
            title={aktifSubmit.judul}
            deskripsi={aktifSubmit.deskripsi}
            type={aktifSubmit.kategori}
            typeColor={aktifSubmit.typeColor}
            points={aktifSubmit.point}
            iconName={aktifSubmit.icon}
            borderColor={aktifSubmit.borderColor}
          />
        </div>

        <div className="flex justify-between items-center p-5">
          <div className="flex items-center gap-2">
            <div className="bg-secondary w-fit p-4 rounded-lg">
              <Paperclip className="text-white" />
            </div>
            <div>
              <h2 className="text-gray-200 font-mono font-bold">Bukti Foto</h2>
              <p className="text-gray-300 font-semibold text-sm">
                {fileName
                  ? `Terpilih: ${fileName}`
                  : "Lampirkan Bukti Foto Aksimu"}
              </p>
            </div>
          </div>

          <label htmlFor="uploadFoto">
            <div className="cursor-pointer bg-secondary w-fit h-fit p-4 rounded-lg">
              <Camera className="text-white" />
            </div>
          </label>

          <input
            type="file"
            id="uploadFoto"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div className="px-5 pb-10">
          <button
            onClick={handleSubmit}
            className="bg-green-600 w-full shadow-xl hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg"
          >
            Submit Aksi
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageSubmit;
