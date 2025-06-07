import { useState } from "react";
import { X, Navigation, Paperclip, Camera } from "react-feather";
import NavDashboard from "../fragments/navDashboard";

import { Link } from "react-router-dom";
import RingkasanMisi from "../fragments/ringkasanMisi";

const misiYangDilaporkan = {
  title: "Ekspedisi Gowes Pagi",
  deskripsi: "Misi untuk pergi bekerja atau ke sekolah menggunakan sepeda.",
  type: "Mobilitas Hijau",
  typeColor: "text-green-400",
  points: 100, 
  icon: <Navigation className="w-6 text-green-400" />,
  borderColor: "border-green-400",
};

function PageSubmit() {
  const [fileName, setFileName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

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

        {/* DIUBAH: Menggunakan komponen RingkasanMisi yang statis dan tidak bisa diklik */}
        <div className="p-4">
          <RingkasanMisi
            title={misiYangDilaporkan.title}
            deskripsi={misiYangDilaporkan.deskripsi}
            type={misiYangDilaporkan.type}
            typeColor={misiYangDilaporkan.typeColor}
            points={misiYangDilaporkan.points}
            icon={misiYangDilaporkan.icon}
            borderColor={misiYangDilaporkan.borderColor}
          />
        </div>

        {/* Bagian untuk upload bukti foto (tidak ada perubahan) */}
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

        {/* Tombol Submit (tidak ada perubahan) */}
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