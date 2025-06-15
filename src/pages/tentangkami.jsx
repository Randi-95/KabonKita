import { ArrowLeft } from "lucide-react";
import { Info } from "react-feather";
import { Link } from "react-router-dom";

function PageTentangKami () {
    return(
        <div className=" px-2 pt-2 ">
            <div className="flex justify-between items-center">
                <Link to="/profile" className="p-2 rounded-full transition-colors hover:bg-white/10">
                    <ArrowLeft className="text-gray-200"/>
                </Link>
                <h1 className="text-gray-200 text-xl font-semibold">Tentang Kami</h1>
                <div className="p-2">
                    <Info className="text-gray-200"/>
                </div>
            </div>
            <div className="text-gray-200 text-justify pb-2 leading-5 mt-4">
                <p><strong>Siapa Kami?</strong></p>
                <p>Kami adalah <strong>PEMUDA SINTAKS 1</strong> yang beranggotakan Moch Rafi Andi Prayitno, Randi Permana Shidiq, Reno Alif yang berlatar belakang pelajar di SMKN 1 Surabaya, sebuah platform web interaktif yang dirancang untuk menjadikan aksi peduli lingkungan sebagai kegiatan yang seru dan bermakna. Misi kami adalah mengubah kebiasaan sehari-hari seperti memilah sampah atau menghemat listrik menjadi sebuah "petualangan hijau" bersama tetangga melalui mekanisme gamifikasi.</p>
                <br />
                <p><strong>Masalah yang Kami Atasi</strong></p>
                <p>Kami melihat adanya tantangan besar: partisipasi masyarakat dalam kegiatan lingkungan di tingkat RT/RW masih sangat rendah, dengan hanya sekitar 8,1% warga yang rutin terlibat. Hal ini sering kali disebabkan oleh kurangnya motivasi , minimnya apresiasi sosial , serta anggapan bahwa aksi lingkungan itu membosankan dan tidak berdampak nyata. Banyak warga merasa kontribusi kecil mereka sia-sia karena dampaknya sulit terlihat secara langsung.</p>
                <br />
                <p><strong>Pendekatan Kami</strong></p>
                <p>KarbonKita hadir sebagai solusi inovatif untuk menjawab tantangan tersebut. Kami percaya bahwa dengan pendekatan yang tepat, setiap orang bisa termotivasi untuk bertindak.</p>
                <ul>
                    <li><strong>Gamifikasi sebagai Pendorong:</strong> Kami mengubah aksi lingkungan menjadi misi seru dengan imbalan poin, lencana, dan kenaikan level. Ini terbukti dapat meningkatkan keterlibatan dan memotivasi pengguna untuk berpartisipasi secara berkelanjutan.</li>
                    <li><strong>Kompetisi Hiper-Lokal:</strong> Keunikan kami terletak pada fokus kompetisi di tingkat RT/RW. Adanya papan peringkat (leaderboard) lokal mendorong persaingan sehat dan memanfaatkan kekuatan ikatan sosial antar tetangga.</li>
                    <li><strong>Visualisasi Dampak:</strong> Melalui dashboard personal dan komunitas, kami menunjukkan bahwa setiap aksi kecil, jika digabungkan, akan menciptakan dampak kolektif yang nyata. Hal ini mengatasi rasa skeptis dan membuktikan bahwa kontribusi setiap individu sangat berarti.</li>
                </ul>
                <br />
                <p>Bersama KarbonKita, kami ingin membuktikan bahwa menjaga bumi bisa dimulai dari langkah sederhana di lingkungan terdekat. Mari bergabung dan jadikan setiap aksi kebaikanmu berarti!</p>
            </div>
        </div>
    )
}

export default PageTentangKami;