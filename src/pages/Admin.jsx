import { useEffect, useState, useCallback, useRef } from "react";
import NavAdmin from "../fragments/navAdmin";
import { useAuth } from "../hooks/useAuth";
import AlertLogin from "../component/alertLogin";
import { Loader } from "react-feather";
import { formatToDate } from "../utils/formatDate";

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

const fetchGenerateUrl = async (file_path, token) => {
  try {
    const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

    const response = await fetch(`${API_BACKEND_URL}/api/admin/generate-url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        filePath: file_path,
      }),
    });

    console.log(file_path);
    if (!response.ok) {
      throw Error("gagal mendapatkan url");
    }

    const dataUrl = await response.json();

    return dataUrl.signedUrl;
  } catch (error) {
    console.error(error);
  }
};

const VerificationModal = ({ isOpen, onClose, activity, token }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [errorImage, setErrorImage] = useState("");
  const pesanAdmin = useRef(null);
  const pointUser = useRef(0);

  useEffect(() => {
    if (isOpen && activity && token) {
      const getImage = async () => {
        try {
          setIsLoadingImage(true);
          setImageUrl(null);
          setErrorImage("");

          const url = await fetchGenerateUrl(activity.file_path, token);

          setImageUrl(url);
          return url;
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoadingImage(false);
        }
      };

      getImage();
    }
  }, [isOpen, activity, token]);

  if (!isOpen || !activity) {
    return null;
  }

  const handlerVerifikasi = async (keputusan) => {
    console.log(keputusan);

    try {
      const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

      const response = await fetch(`${API_BACKEND_URL}/api/admin/verifikasi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          kegiatanId: activity.id,
          keputusan: keputusan,
          pesan_admin: pesanAdmin.current.value,
        }),
      });

      if (!response.ok) {
        console.log(`gagal verifikasi`);
      }
      const data = await response.json();

      if (data) {
        onClose();
        window.location.reload()
      }

      console.log(data)
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      onClick={onClose}
      className="overflow-auto fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-full max-w-2xl p-6 relative"
      >
        <div className="border-b border-gray-600 pb-4 mb-4">
          <h3 className="text-xl font-bold text-gray-100">Bukti Kegiatan</h3>
          {isLoadingImage && <Loader className="animate-spin text-primary" />}
          {errorImage && <p className="text-red-500">{errorImage}</p>}
          {imageUrl && !isLoadingImage && (
            <img
              src={imageUrl}
              alt="Bukti kegiatan"
              className="max-w-full max-h-[400px] rounded"
            />
          )}
        </div>

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
              ref={pesanAdmin}
              id="catatan"
              rows="3"
              className="w-full p-2 bg-gray-900 border border-gray-600 text-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
              placeholder="Contoh: Kegiatan sudah bagus, pertahankan!"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="catatan"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              deskripsi kegiatan : 
            </label>
            <p className="text-white">{activity.deskripsi}</p>
          </div>
          <div>
            <label
              htmlFor="poin"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Poin yang Diberikan (jika disetujui):
            </label>
            <input
              ref={pointUser}
              type="number"
              id="poin"
              value={activity.point_kegiatan || 0}
              defaultValue="10"
              className="w-full p-2 bg-gray-900 border border-gray-600 text-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
          </div>
        </form>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-600">
          <div>
            <button
              onClick={() => {
                const keputusan = "disetujui";
                console.log(keputusan);
                handlerVerifikasi(keputusan);
              }}
              className="bg-primary hover:opacity-80 text-gray-900 font-bold py-2 px-4 rounded-lg mr-2 transition-opacity"
            >
              Setujui
            </button>
            <button
              onClick={() => {
                const keputusan = "ditolak";
                console.log(keputusan);
                handlerVerifikasi(keputusan);
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
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
  const [loading, setLoading] = useState(true);
  const [dataKegiatan, setDataKegiatan] = useState([]);

  const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

  const fetchKegiatanPending = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${API_BACKEND_URL}/api/admin/kegiatan-pending`,
        {
          headers: {
            Authorization: `bearer ${session.access_token}`,
          },
        }
      );

      console.log(session.access_token);
      const data = await response.json();

      console.log(data);

      setDataKegiatan(data);

      if (!response.ok) {
        throw new Error(`Gagal mengambil data, status: ${response.message}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      fetchKegiatanPending();
    } else {
      setLoading(false);
    }
  }, [fetchKegiatanPending]);

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
        <button onClick={() => window.location.reload()} className="cursor-pointer bg-primary w-full p-2 rounded-lg font-bold text-gray-900 text-xl">
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
              {dataKegiatan.map((activity) => (
                <tr
                  key={activity.id}
                  className="hover:bg-gray-900 transition bg-gray-800 duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">
                      {formatToDate(activity.created_at)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-primary">
                      {activity.user_profile.nama}
                    </div>
                    <div className="text-sm text-gray-200">
                      {activity.user_profile.email || "N/A"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {activity.deskripsi}
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
        token={session.access_token}
      />
    </div>
  );
}

export default AdminPage;
