import { useState, useContext } from "react";
import { X, Paperclip, Camera } from "react-feather";
import { Navigation, Zap, Trash2 } from "react-feather";
import { Form, Link, useNavigate } from "react-router-dom";
import { MisiSubmitContext } from "../context/misiSubmitContext";
import NavDashboard from "../fragments/navDashboard";
import RingkasanMisi from "../fragments/ringkasanMisi";
import AlertLogin from "../component/alertLogin";
import { useAuth } from "../hooks/useAuth";

function PageSubmit() {
  const { aktifSubmit } = useContext(MisiSubmitContext);
  const { session, profile } = useAuth();
  const navigate = useNavigate();

  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setMessage("Error: Ukuran file terlalu besar (Max 5MB).");
        return;
      }
      if (!file.type.startsWith("image/")) {
        setMessage("Error: Hanya file gambar yang diizinkan.");
        return;
      }
      setFileName(file.name);
      setSelectedFile(file);
      setMessage("");
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setMessage("file belum di pilih");
      return;
    }
    if (!session) {
      setMessage("sesi tidak ditemukan");
      return;
    }
    if (!aktifSubmit) {
      setMessage("misi aktif tidak ditemukan");
      return;
    }

    setLoading(true);
    setMessage("sedang memproses..");

    try {
      const formData = new FormData();
      formData.append("buktiFoto", selectedFile);
      formData.append("deskripsi", aktifSubmit.judul);
      formData.append("point_pending", aktifSubmit.point);

      const response = await fetch(`${API_BACKEND_URL}/api/kegiatan`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
        body: formData,
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || "Gagal mengirim bukti kegiatan.");
      }

      alert(`Berhasil uploud ${result.message}`);
      navigate("/home");
    } catch (err) {
             setMessage(`Error: ${err.message}`);
        console.error("Submit Gagal:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return (
      <div className="w-full h-screen justify-center items-center">
        <AlertLogin />
      </div>
    );
  }

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

        {message && <p className={`px-5 text-center font-semibold ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}

        <div className="px-5 pb-10">
          <button
            onClick={handleSubmit}
            className="bg-green-600 w-full shadow-xl hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg"
          >
            {loading ? 'Mengirim...' : 'Submit Aksi'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageSubmit;
