import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_WILAYAH_URL = "https://www.emsifa.com/api-wilayah-indonesia/api";
const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL || 'http://localhost:3321';

function RegisterPage() {
    const navigate = useNavigate();

    // State untuk data dari API wilayah
    const [provinsiList, setProvinsiList] = useState([]);
    const [kabupatenList, setKabupatenList] = useState([]);
    const [kecamatanList, setKecamatanList] = useState([]);
    const [kelurahanList, setKelurahanList] = useState([]);

    const [selectedProvinsi, setSelectedProvinsi] = useState("");
    const [selectedKabupaten, setSelectedKabupaten] = useState("");
    const [selectedKecamatan, setSelectedKecamatan] = useState("");

    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        password: "",
        jenisKelamin: "",
        provinsi: "",
        kabupaten: "",
        kecamatan: "",
        kelurahan: "",
        rt: "",
        rw: "",
        role: "user",
    });

    // State untuk loading dan pesan
    const [loading, setLoading] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    // Fungsi-fungsi untuk mengambil data wilayah
    const fetchWilayah = useCallback(async (url, setter, loadingKey) => {
        setLoading(prev => ({ ...prev, [loadingKey]: true }));
        try {
            const response = await fetch(url);
            const data = await response.json();
            setter(data);
        } catch (error) {
            console.error(`Gagal mengambil data ${loadingKey}:`, error);
        } finally {
            setLoading(prev => ({ ...prev, [loadingKey]: false }));
        }
    }, []);

    useEffect(() => { fetchWilayah(`${API_WILAYAH_URL}/provinces.json`, setProvinsiList, 'provinsi'); }, [fetchWilayah]);
    useEffect(() => { if (selectedProvinsi) fetchWilayah(`${API_WILAYAH_URL}/regencies/${selectedProvinsi}.json`, setKabupatenList, 'kabupaten'); }, [selectedProvinsi, fetchWilayah]);
    useEffect(() => { if (selectedKabupaten) fetchWilayah(`${API_WILAYAH_URL}/districts/${selectedKabupaten}.json`, setKecamatanList, 'kecamatan'); }, [selectedKabupaten, fetchWilayah]);
    useEffect(() => { if (selectedKecamatan) fetchWilayah(`${API_WILAYAH_URL}/villages/${selectedKecamatan}.json`, setKelurahanList, 'kelurahan'); }, [selectedKecamatan, fetchWilayah]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const isNumeric = ['rt', 'rw'].includes(name);
        setFormData(prev => ({ ...prev, [name]: isNumeric ? parseInt(value, 10) || '' : value }));
    };

    const handleAlamatChange = (event, level) => {
        const id = event.target.value;
        const name = event.target.options[event.target.selectedIndex].text;

        if (level === 'provinsi') {
            setSelectedProvinsi(id);
            setFormData(prev => ({ ...prev, provinsi: name, kabupaten: "", kecamatan: "", kelurahan: "" }));
            setKabupatenList([]); setKecamatanList([]); setKelurahanList([]);
            setSelectedKabupaten(""); setSelectedKecamatan("");
        } else if (level === 'kabupaten') {
            setSelectedKabupaten(id);
            setFormData(prev => ({ ...prev, kabupaten: name, kecamatan: "", kelurahan: "" }));
            setKecamatanList([]); setKelurahanList([]);
            setSelectedKecamatan("");
        } else if (level === 'kecamatan') {
            setSelectedKecamatan(id);
            setFormData(prev => ({ ...prev, kecamatan: name, kelurahan: "" }));
            setKelurahanList([]);
        } else if (level === 'kelurahan') {
            setFormData(prev => ({ ...prev, kelurahan: name }));
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setMessage('');
        try {
            const response = await fetch(`${API_BACKEND_URL}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Registrasi gagal.');
            alert('Registrasi berhasil! Anda akan diarahkan ke halaman login.');
            navigate('/login');
        } catch (error) {
            console.error("Registrasi Gagal:", error);
            setMessage(`Registrasi Gagal: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-secondary lg:bg-background flex items-center justify-center min-h-screen">
            <div className="w-full bg-secondary shadow-xl overflow-hidden lg:grid lg:grid-cols-[1fr_2fr] lg:items-center">
                <div className="bg-gradient-to-br bg-secondary h-72 lg:h-full relative flex items-center justify-center">
                    <div>
                        <img src="/MentahanLogo.png" alt="" className="w-60" />
                    </div>
                </div>
                
                <div className="p-8 bg-background h-full rounded-tl-[80px] lg:rounded-tl-[100px] lg:flex lg:justify-center lg:flex-col">
                    <h1 className="text-3xl lg:text-6xl text-center font-semibold lg:font-bold text-primary mb-8">Daftar</h1>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Username</label>
                            <input 
                                type="text" 
                                name="nama"
                                onChange={handleInputChange} 
                                className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0" 
                                placeholder="Jhon Doe"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                            <input 
                                type="email"
                                name="email"
                                onChange={handleInputChange}
                                className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0" 
                                placeholder="yourname@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
                            <input 
                                type="password"
                                name="password" 
                                onChange={handleInputChange} 
                                className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0" 
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-2">Jenis Kelamin</label>
                                <select 
                                    name="jenisKelamin" 
                                    onChange={handleInputChange} 
                                    className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-background text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0"
                                    required
                                >
                                    <option value="">Pilih</option>
                                    <option value="laki-laki">Laki-laki</option>
                                    <option value="perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-2">RT</label>
                                <input type="number" name="rt" onChange={handleInputChange} className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0" placeholder="10" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-2">RW</label>
                                <input type="number" name="rw" onChange={handleInputChange} className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0" placeholder="2" required />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Provinsi</label>
                            <select onChange={(e) => handleAlamatChange(e, 'provinsi')} className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-background text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0" required>
                                <option value="">{loading.provinsi ? 'Memuat...' : 'Pilih Provinsi'}</option>
                                {provinsiList.map(prov => <option key={prov.id} value={prov.id}>{prov.name}</option>)}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Kabupaten/Kota</label>
                            <select onChange={(e) => handleAlamatChange(e, 'kabupaten')} disabled={!selectedProvinsi || loading.kabupaten} className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-background text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 disabled:opacity-50" required>
                                <option value="">{loading.kabupaten ? 'Memuat...' : 'Pilih Kabupaten/Kota'}</option>
                                {kabupatenList.map(kab => <option key={kab.id} value={kab.id}>{kab.name}</option>)}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Kecamatan</label>
                            <select onChange={(e) => handleAlamatChange(e, 'kecamatan')} disabled={!selectedKabupaten || loading.kecamatan} className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-background text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 disabled:opacity-50" required>
                                <option value="">{loading.kecamatan ? 'Memuat...' : 'Pilih Kecamatan'}</option>
                                {kecamatanList.map(kec => <option key={kec.id} value={kec.id}>{kec.name}</option>)}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Kelurahan/Desa</label>
                            <select name="kelurahan" onChange={(e) => handleAlamatChange(e, 'kelurahan')} disabled={!selectedKecamatan || loading.kelurahan} className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-background text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 disabled:opacity-50" required>
                                <option value="">{loading.kelurahan ? 'Memuat...' : 'Pilih Kelurahan/Desa'}</option>
                                {kelurahanList.map(kel => <option key={kel.id} value={kel.name}>{kel.name}</option>)}
                            </select>
                        </div>
                        
                        {message && <p className={`mt-4 text-center text-sm font-semibold ${message.startsWith('Gagal') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}

                        <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 mt-8 disabled:opacity-70">
                            {isSubmitting ? 'Mendaftar...' : 'Daftar'}
                        </button>
                    </form>
                    
                    <div className="text-center mt-8">
                        <span className="text-gray-400 text-sm">Anda Sudah Memiliki Akun? </span>
                        <Link to="/login" className="text-primary font-semibold text-sm hover:underline">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;