import { ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import AlertLogin from "../component/alertLogin";

function PageTentangKami() {
  const { session } = useAuth();

  if (!session) {
    return (
      <div className="w-full h-screen justify-center items-center">
        <AlertLogin />
      </div>
    );
  }
  return (
    <div className="px-6 md:px-9 py-4 bg-background min-h-screen">
      <div className="flex justify-between items-center">
        <Link
          to="/profile"
          className="p-2 rounded-full transition-colors hover:bg-white/10"
        >
          <ArrowLeft className="text-gray-200" />
        </Link>
        <h1 className="text-gray-200 text-xl font-semibold">Tentang Kami</h1>
        <div className="p-2">
          <Info className="text-gray-200" />
        </div>
      </div>

      <div className="text-gray-300 text-justify leading-relaxed mt-6 max-w-3xl mx-auto pb-20">
        <h2 className="text-2xl font-bold text-primary mb-3 mt-6">
          Siapa Kami?
        </h2>
        <p className="mb-4">
          Kami adalah{" "}
          <strong className="text-white font-bold">PEMUDA SINTAKS 1</strong>{" "}
          yang beranggotakan Moch Rafi Andi Prayitno, Randi Permana Shidiq, dan
          Reno Alif yang berlatar belakang pelajar di SMKN 1 Surabaya. kami merupakan tim dibalik KabonKita,
          KarbonKita adalah sebuah platform web interaktif yang dirancang untuk
          menjadikan aksi peduli lingkungan sebagai kegiatan yang seru dan
          bermakna. Misi kami adalah mengubah kebiasaan sehari-hari seperti
          memilah sampah atau menghemat listrik menjadi sebuah "petualangan
          hijau" bersama tetangga melalui mekanisme gamifikasi.
        </p>

        <h2 className="text-2xl font-bold text-primary mb-3 mt-8">
          Masalah yang Kami Atasi
        </h2>
        <p>
          Kami melihat adanya tantangan besar: partisipasi masyarakat dalam
          kegiatan lingkungan di tingkat RT/RW masih sangat rendah, dengan hanya
          sekitar 8,1% warga yang rutin terlibat. Hal ini sering kali disebabkan
          oleh kurangnya motivasi, minimnya apresiasi sosial, serta anggapan
          bahwa aksi lingkungan itu membosankan dan tidak berdampak nyata.
          Banyak warga merasa kontribusi kecil mereka sia-sia karena dampaknya
          sulit terlihat secara langsung.
        </p>

        <h2 className="text-2xl font-bold text-primary mb-3 mt-8">
          Pendekatan Kami
        </h2>
        <p className="mb-4">
          KarbonKita hadir sebagai solusi inovatif untuk menjawab tantangan
          tersebut. Kami percaya bahwa dengan pendekatan yang tepat, setiap
          orang bisa termotivasi untuk bertindak.
        </p>

        <ul className="list-disc list-inside space-y-3 pl-2">
          <li>
            <strong className="text-white">
              Gamifikasi sebagai Pendorong:
            </strong>{" "}
            Kami mengubah aksi lingkungan menjadi misi seru dengan imbalan poin,
            lencana, dan kenaikan level. Ini terbukti dapat meningkatkan
            keterlibatan dan memotivasi pengguna untuk berpartisipasi secara
            berkelanjutan.
          </li>
          <li>
            <strong className="text-white">Kompetisi Hiper-Lokal:</strong>{" "}
            Keunikan kami terletak pada fokus kompetisi di tingkat RT/RW. Adanya
            papan peringkat (leaderboard) lokal mendorong persaingan sehat dan
            memanfaatkan kekuatan ikatan sosial antar tetangga.
          </li>
          <li>
            <strong className="text-white">Visualisasi Dampak:</strong> Melalui
            dashboard personal dan komunitas, kami menunjukkan bahwa setiap aksi
            kecil, jika digabungkan, akan menciptakan dampak kolektif yang
            nyata. Hal ini mengatasi rasa skeptis dan membuktikan bahwa
            kontribusi setiap individu sangat berarti.
          </li>
        </ul>

        <p className="mt-8">
          Bersama KarbonKita, kami ingin membuktikan bahwa menjaga bumi bisa
          dimulai dari langkah sederhana di lingkungan terdekat. Mari bergabung
          dan jadikan setiap aksi kebaikanmu berarti!
        </p>
      </div>
    </div>
  );
}

export default PageTentangKami;
