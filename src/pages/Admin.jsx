import { useEffect, useState } from "react";
import NavAdmin from "../fragments/navAdmin";
import { useAuth } from "../hooks/useAuth";
import AlertLogin from "../component/alertLogin";
import { Loader } from "react-feather";

const kegiatanPendingResponse = [
  {
    id: "3870be75-873e-4614-94ba-f9e07e6f931d",
    created_at: "2025-06-10T04:25:55.803628+00:00",
    deskripsi: "menggunakan botol ",
    file_path:
      "verifikasi/dd8f2b35-d8f2-42d9-b916-ae3bf4eafffd/1749529554974-Cuplikan layar 2024-09-16 210038.png",
    point_kegiatan: 10,
    user_profile: {
      nama: "rafi andi",
      email: "rafiandi@gmail.com",
    },
  },
];

const initialActivities = [
  {
    id: 1,
    date: "7/6/2025,",
    time: "15.33.59",
    user: "rafi andi",
    email: "rafiandiprayitno9528@gmail.com",
    description: "bersepeda",
  },
  {
    id: 2,
    date: "7/6/2025,",
    time: "16.14.57",
    user: "rafi andi",
    email: null,
    description: "menanam",
  },
  {
    id: 3,
    date: "8/6/2025,",
    time: "09.30.00",
    user: "Siti Aminah",
    email: "siti.a@example.com",
    description: "mengikuti webinar",
  },
];

const VerificationModal = ({ isOpen, onClose, activity }) => {
  if (!isOpen || !activity) {
    return null;
  }

  return (
    // Backdrop / Overlay
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
    >
      {/* Konten Modal - Disesuaikan dengan tema gelap */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-full max-w-2xl p-6 relative"
      >
        {/* Header */}
        <div className="border-b border-gray-600 pb-4 mb-4">
          <h3 className="text-xl font-bold text-gray-100">
            Verifikasi Kegiatan oleh:{" "}
            <span className="text-primary">{activity.user}</span>
          </h3>
          <p className="text-gray-400 mt-1">
            Deskripsi: {activity.description}
          </p>
        </div>

        {/* Form */}
        <form>
          <h4 className="text-lg font-semibold text-gray-200 mb-3">
            Form Verifikasi
          </h4>
          <div className="mb-4">
            <label
              htmlFor="catatan"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Catatan untuk User (Opsional):
            </label>
            <textarea
              id="catatan"
              rows="3"
              className="w-full p-2 bg-gray-900 border border-gray-600 text-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
              placeholder="Contoh: Kegiatan sudah bagus, pertahankan!"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="poin"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Poin yang Diberikan (jika disetujui):
            </label>
            <input
              type="number"
              id="poin"
              defaultValue="10"
              className="w-full p-2 bg-gray-900 border border-gray-600 text-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>
        </form>

        {/* Tombol Aksi */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-600">
          <div>
            <button className="bg-primary hover:opacity-80 text-gray-900 font-bold py-2 px-4 rounded-lg mr-2 transition-opacity">
              Setujui
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Tolak
            </button>
          </div>
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

function AdminPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const { profile, session } = useAuth();
  const [loading, setLoading] = useState(true)

    const API_BACKEND_URL =
    import.meta.env.VITE_API_BACKEND_URL;

  const fetchKegiatanPending = () => {
    setLoading(true)

    try{
      const response = fetch(`${API_BACKEND_URL}/api/admin/kegiatan-pending`,{
        headers: {
          Authorization: `bearer ${session.access_token}`
        }
      })

      const data = response.json()
    } catch(error){

    }
  };

  useEffect(() => {}, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-background">
        <Loader className="animate-spin text-primary" size={48} />
        <p className="ml-4 text-lg text-gray-300">Memuat data...</p>
      </div>
    );
  }

  const role = profile?.role;

  if (role !== "admin") {
    return (
      <div className="w-full h-screen justify-center items-center">
        <AlertLogin />
      </div>
    );
  }

  const handleOpenModal = (activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-background">
      <NavAdmin />

      <div className="lg:w-3/4 lg:absolute lg:right-0 p-2">
        <div className="p-2 flex justify-center">
          <h2 className="text-gray-700 dark:text-gray-200 text-xl font-bold font-mono">
            Verifikasi Kegiatan Pending
          </h2>
        </div>
        <button className="bg-primary w-full p-2 rounded-lg font-bold text-gray-900 text-xl">
          Refresh Daftar
        </button>

        <div className="overflow-x-auto mt-10">
          <table className="min-w-full text-left">
            <thead className="border-b bg-secondary">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-sm font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Tanggal
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-sm font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Pengguna
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-sm font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Deskripsi
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-sm font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {initialActivities.map((activity) => (
                <tr
                  key={activity.id}
                  className="hover:bg-gray-900 transition bg-gray-800 duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{activity.date}</div>
                    <div className="text-sm text-gray-300">{activity.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-primary">
                      {activity.user}
                    </div>
                    <div className="text-sm text-gray-200">
                      {activity.email || "N/A"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {activity.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleOpenModal(activity)}
                      className="bg-primary hover:opacity-80 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-opacity duration-300"
                    >
                      Lihat & Verifikasi
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <VerificationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        activity={selectedActivity}
      />
    </div>
  );
}

export default AdminPage;
