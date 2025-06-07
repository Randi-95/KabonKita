// src/pages/PageSubmit.jsx

import { useState, useContext } from "react";
import { X, Paperclip, Camera } from "react-feather";
import { Navigation, Zap, Trash2 } from 'react-feather';
import { Link, useNavigate } from "react-router-dom"; // Impor useNavigate untuk redirect
import { MisiSubmitContext } from "../context/misiSubmitContext";
import NavDashboard from "../fragments/navDashboard";
import RingkasanMisi from "../fragments/ringkasanMisi";

// Objek 'misiYangDilaporkan' yang tidak terpakai sudah dihapus.

function PageSubmit() {
  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  // Ambil state dari context. Kita tidak perlu setAktifSubmit di sini.
  const { aktifSubmit } = useContext(MisiSubmitContext);
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    }
  };

  const handleSubmit = () => {
    // Di sini nanti Anda akan menambahkan logika untuk mengirim data ke backend
    if (!selectedFile) {
      alert("Silakan pilih file terlebih dahulu.");
      return;
    }
    alert(`Berhasil submit! File: ${fileName}`);
    // Setelah berhasil, mungkin arahkan pengguna ke halaman lain
    // navigate('/misi-selesai');
  };
  
  // ====================================================================
  // === PERBAIKAN UTAMA: Pengecekan sebelum render ===
  // ====================================================================
  // Jika aktifSubmit masih null (misalnya, setelah refresh atau akses langsung)
  // maka kita tampilkan pesan dan link untuk kembali.
  if (!aktifSubmit) {
    return (
      <div className="min-h-screen bg-white dark:bg-background flex items-center justify-center">
        <div className="text-center p-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Oops! Tidak ada misi yang dipilih.</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Sepertinya Anda me-refresh halaman atau datang ke sini tanpa memilih misi terlebih dahulu.
          </p>
          <Link to="/" className="text-blue-500 hover:underline font-semibold">
            &larr; Kembali ke Daftar Misi
          </Link>
        </div>
      </div>
    );
  }

  // Jika kode sampai di sini, kita 100% yakin 'aktifSubmit' sudah berisi data.
  // Sehingga aman untuk me-render JSX di bawah ini.
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      <div className="hidden lg:block">
        <NavDashboard />
      </div>
      <div className="lg:w-3/4 lg:absolute lg:right-0 pt-4">
        <div className="w-full p-4 flex justify-between items-center">
          <p></p>
          <h2 className="text-gray-200 font-bold text-xl">Laporkan Aksimu</h2>
          <Link to="/">
            <X className="text-gray-200" />
          </Link>
        </div>

        {/* Sekarang bagian ini aman dari error 'null' */}
        <div className="p-4">
          <RingkasanMisi
            title={aktifSubmit.judul}
            deskripsi={aktifSubmit.deskripsi}
            type={aktifSubmit.kategori}
            typeColor={aktifSubmit.typeColor}
            points={aktifSubmit.point}
            iconName={aktifSubmit.icon} // Kirim nama ikon sebagai string
            borderColor={aktifSubmit.borderColor}
          />
        </div>

        {/* Bagian untuk upload bukti foto */}
        <div className="flex justify-between items-center p-5">
          <div className="flex items-center gap-2">
            <div className="bg-secondary w-fit p-4 rounded-lg">
              <Paperclip className="text-white" />
            </div>
            <div>
              <h2 className="text-gray-200 font-mono font-bold">Bukti Foto</h2>
              <p className="text-gray-300 font-semibold text-sm">
                {fileName ? `Terpilih: ${fileName}` : "Lampirkan Bukti Foto Aksimu"}
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

        {/* Tombol Submit */}
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