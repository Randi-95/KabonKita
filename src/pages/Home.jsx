import React, { useState } from 'react';
import {
    Menu, X, ArrowRight, Check, ChevronsRight, BarChart2, Layers, Users, 
    ChevronDown, Twitter, Instagram, Linkedin, Mail
} from 'react-feather';
import { Link } from 'react-router-dom';

const FaqItem = ({ faq, index, openFaq, setOpenFaq }) => {
    const isOpen = index === openFaq;

    return (
        <div className="border-b border-slate-800">
            <button
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full flex justify-between items-center text-left py-5"
            >
                <span className="text-lg font-medium text-slate-100">{faq.question}</span>
                <ChevronDown
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen pb-5' : 'max-h-0'}`}
            >
                <p className="text-slate-400">{faq.answer}</p>
            </div>
        </div>
    );
};


function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const navLinks = [
        { title: "Tentang", href: "#tentang" },
        { title: "Cara Kerja", href: "#cara-kerja" },
        { title: "Fitur", href: "#fitur" },
        { title: "FAQ", href: "#faq" },
    ];

    const faqs = [
        {
            question: "Apa bedanya KarbonKita dengan aplikasi lingkungan lain?",
            answer: "KarbonKita fokus pada gamifikasi dan pembentukan kebiasaan. Kami tidak hanya memberi tahu Anda tentang masalah, tapi memberikan misi harian yang terukur dan menyenangkan untuk diselesaikan, lengkap dengan poin, level, dan leaderboard untuk motivasi berkelanjutan."
        },
        {
            question: "Apakah data jejak karbon saya akurat?",
            answer: "Kami menggunakan kalkulator berdasarkan standar emisi yang diakui secara umum dan data lokal. Meskipun merupakan estimasi, ini adalah alat yang ampuh untuk memahami dampak pilihan gaya hidup Anda dan melihat progres pengurangan emisi Anda secara nyata."
        },
        {
            question: "Bisakah saya membuat tim atau komunitas sendiri?",
            answer: "Fitur tim dan komunitas ada dalam roadmap pengembangan kami! Untuk saat ini, Anda dapat bersaing secara individu di papan peringkat mingguan dan bulanan kami."
        },
        {
            question: "Bagaimana KarbonKita menghasilkan pendapatan jika gratis?",
            answer: "Saat ini, kami didanai oleh hibah dan sponsor. Ke depannya, kami mungkin akan menjalin kemitraan dengan brand-brand ramah lingkungan untuk menawarkan hadiah eksklusif bagi pengguna berprestasi, tanpa membebankan biaya kepada pengguna."
        }
    ];

    return (
        <div className="bg-background text-slate-300 font-sans">
            
            <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-xl border-b border-slate-800">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                       <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-white">
                            <img src="/MentahanLogo.png" alt="Logo" className="w-30 h-30" />
                            <span>
                                Karbon<span className="text-primary">Kita</span>
                            </span>
                        </a>
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map(link => <a key={link.title} href={link.href} className="hover:text-primary transition-colors">{link.title}</a>)}
                        </div>
                        <div className="hidden lg:flex items-center gap-4">
                            <Link to="/login" className="font-medium hover:text-white">Masuk</Link>
                            <Link to="/login" href="#" className="px-5 py-2 font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-lg hover:opacity-90 transition-opacity">
                                Gabung Gerakan
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(true)}><Menu /></button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-background to-[#1a1a1a] p-6 z-50 animate-fade-in-down">
                        <div className="flex justify-between items-center mb-12">
                            <a href="#home" className="text-2xl font-bold text-white">Karbon<span className="text-teal-400">Kita</span></a>
                            <button onClick={() => setIsMenuOpen(false)}><X /></button>
                        </div>
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map(link => <a key={link.title} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-teal-400 transition-colors">{link.title}</a>)}
                            <hr className="border-slate-700 my-4" />
                            <Link to="/login" className="text-2xl font-medium">Masuk</Link>
                            <Link to="/login" href="#" className="w-full mt-4 px-5 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">Gabung Gerakan</Link>
                        </div>
                    </div>
                )}
            </nav>

            <main>
                <section id="home" className="relative container mx-auto px-6 lg:px-8 pt-10 pb-16  md:pb-24 flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-green-300 bg-green-500/20 rounded-full">Pahlawan untuk Bumi</span>
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">Aksi Iklim Nyata,</span> Dibuat Seru & Terukur.</h1>
                        <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto lg:mx-0">KarbonKita mengubah niat baik menjadi kebiasaan berdampak. Selesaikan misi harian, lacak pengurangan jejak karbon Anda, dan bergabunglah dengan komunitas yang bersemangat menyelamatkan planet kita.</p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a href="#" className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                Mulai Aksi Pertamamu <ArrowRight size={20} />
                            </a>
                            <a href="#daftar" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-transparent border-2 border-gray-600 rounded-lg hover:bg-gray-800 hover:border-gray-800 transition-all">
                                <span>Daftar Sekarang!</span>
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="w-full max-w-lg h-96 bg-slate-800 rounded-2xl flex items-center justify-center border border-dashed border-slate-700">
                             <img src="" alt="Mockup dashboard aplikasi KarbonKita yang menampilkan progres dan misi" className="hidden"/>
                            <p className="text-slate-500">Placeholder untuk mockup aplikasi</p>
                        </div>
                    </div>
                </section>

               
                <section id="tentang" className="py-20 lg:py-28">
                    <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-sm font-semibold text-teal-400 uppercase">Misi Kami</span>
                            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-white">Menjembatani Niat dan Aksi</h2>
                            <p className="mt-4 text-slate-400">Banyak dari kita ingin membantu mengatasi perubahan iklim, namun merasa bingung harus mulai dari mana. Aksi terasa kecil dan dampaknya tidak terlihat. KarbonKita lahir untuk memecahkan masalah ini dengan mengubah aksi iklim yang abstrak menjadi langkah-langkah konkret, menyenangkan, dan transparan.</p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-green-400 flex-shrink-0" />
                                    <span><span className="font-semibold text-white">Aksi Kecil Berdampak:</span> Kami percaya perubahan besar dimulai dari kebiasaan kecil yang konsisten.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-green-400 flex-shrink-0" />
                                    <span><span className="font-semibold text-white">Gamifikasi sebagai Motivasi:</span> Poin, lencana, dan kompetisi membuat prosesnya menyenangkan dan adiktif secara positif.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 mt-1 text-green-400 flex-shrink-0" />
                                    <span><span className="font-semibold text-white">Data & Transparansi:</span> Lacak dampak positif Anda secara kuantitatif dan lihat kontribusi kolektif komunitas.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="w-full max-w-md h-80 bg-slate-800 rounded-2xl flex items-center justify-center border border-dashed border-slate-700">
                                <img src="" alt="Ilustrasi yang menggambarkan perjalanan dari niat menjadi aksi nyata" className="hidden"/>
                                <p className="text-slate-500">Placeholder untuk ilustrasi misi</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                
                <section id="cara-kerja" className="py-20 lg:py-28 bg-gradient-to-t from-[#1a1a1a] to-background">
                    <div className="container mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Perjalananmu Menjadi Pahlawan Iklim</h2>
                        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Tiga langkah sederhana untuk mengubah dunia, mulai dari dirimu sendiri.</p>
                        <div className="relative mt-16 max-w-4xl mx-auto">
                           <div className="hidden md:block absolute top-8 left-1/2 w-px h-[calc(100%-4rem)] bg-slate-700"></div>
                          
                           <div className="md:grid md:grid-cols-2 gap-8 items-center mb-16">
                                <div className="text-center md:text-right md:pr-8">
                                    <h3 className="text-2xl font-bold text-primary">01. Daftar & Ukur Dampak Awal</h3>
                                    <p className="mt-2 text-slate-400">Gunakan kalkulator kami untuk mendapatkan gambaran awal jejak karbon Anda. Ini menjadi titik awal perjalanan Anda.</p>
                                </div>
                                <div className="relative">
                                    <div className="hidden md:block absolute left-[-2rem] top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full"></div>
                                </div>
                           </div>
                            
                           <div className="md:grid md:grid-cols-2 gap-8 items-center mb-16">
                                <div className="relative order-2 md:order-1">
                                    <div className="hidden md:block absolute right-[-2rem] top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full"></div>
                                </div>
                                <div className="text-center md:text-left md:pl-8 order-1 md:order-2">
                                    <h3 className="text-2xl font-bold text-primary">02. Selesaikan Misi Hijau</h3>
                                    <p className="mt-2 text-slate-400">Pilih dari puluhan misi harian dan mingguan. Unggah bukti foto untuk memverifikasi aksimu dan dapatkan poin.</p>
                                </div>
                           </div>
                           
                           <div className="md:grid md:grid-cols-2 gap-8 items-center">
                                <div className="text-center md:text-right md:pr-8">
                                    <h3 className="text-2xl font-bold text-primary">03. Lacak Progres & Naik Level</h3>
                                    <p className="mt-2 text-slate-400">Lihat dampak kumulatif Anda di dashboard personal. Kumpulkan lencana, naikkan peringkat, dan rayakan setiap pencapaian.</p>
                                </div>
                                <div className="relative">
                                    <div className="hidden md:block absolute left-[-2rem] top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full"></div>
                                </div>
                           </div>
                        </div>
                    </div>
                </section>

                
                <section id="fitur" className="py-20 lg:py-28 bg-gradient-to-t from-background to-[#1a1a1a]">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white">Tools untuk Perubahan</h2>
                            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Fitur-fitur yang dirancang untuk membuat aksimu lebih bermakna dan menyenangkan.</p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                            <div className="flex justify-center">
                                <div className="w-full max-w-md h-80 bg-slate-800 rounded-2xl flex items-center justify-center border border-dashed border-slate-700">
                                    <img src="" alt="Screenshot dari daftar misi di aplikasi KarbonKita" className="hidden"/>
                                    <p className="text-slate-500">Placeholder screenshot misi</p>
                                </div>
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-3"><Layers className="text-green-400" /><h3 className="text-2xl font-bold text-white">Misi Dinamis & Bervariasi</h3></div>
                                <p className="mt-4 text-slate-400">Dari "Hari Tanpa Daging" hingga "Cabut Steker Elektronik", misi kami mencakup berbagai aspek kehidupan untuk memastikan selalu ada tantangan baru yang sesuai dengan gaya hidup Anda.</p>
                            </div>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center gap-3"><BarChart2 className="text-green-400" /><h3 className="text-2xl font-bold text-white">Dashboard Progres Personal</h3></div>
                                <p className="mt-4 text-slate-400">Bukan hanya sekadar poin. Lihat estimasi berapa kilogram CO2e yang berhasil Anda hemat, berapa liter air yang Anda konservasi, dan metrik dampak lainnya. Data membuat aksimu terasa nyata.</p>
                            </div>
                            <div className="order-1 lg:order-2 flex justify-center">
                                <div className="w-full max-w-md h-80 bg-slate-800 rounded-2xl flex items-center justify-center border border-dashed border-slate-700">
                                    <img src="" alt="Screenshot dari dashboard personal pengguna" className="hidden"/>
                                    <p className="text-slate-500">Placeholder screenshot dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="aksi-kita" className="py-20 lg:py-24 bg-background">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white">Lihat Aksi Para Pahlawan Kita</h2>
                            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Mereka sudah membuktikan, aksi kecil punya dampak besar. Sekarang giliranmu!</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                           <div className="w-full h-48 md:h-64 bg-gray-800 rounded-lg flex items-end p-4"><img src="" alt="Contoh bukti misi: membawa tumbler" className="hidden"/><p className="text-sm text-gray-300">Misi: Bawa Tumbler ✅</p></div>
                           <div className="w-full h-48 md:h-64 bg-gray-800 rounded-lg flex items-end p-4"><img src="" alt="Contoh bukti misi: bersepeda ke kantor" className="hidden"/><p className="text-sm text-gray-300">Misi: Bersepeda Hari Ini ✅</p></div>
                           <div className="w-full h-48 md:h-64 bg-gray-800 rounded-lg flex items-end p-4"><img src="" alt="Contoh bukti misi: memilah sampah" className="hidden"/><p className="text-sm text-gray-300">Misi: Pilah Sampah ✅</p></div>
                           <div className="w-full h-48 md:h-64 bg-gray-800 rounded-lg flex items-end p-4"><img src="" alt="Contoh bukti misi: menanam pohon" className="hidden"/><p className="text-sm text-gray-300">Misi: Tanam Pohon ✅</p></div>
                        </div>
                    </div>
                </section>

                
                <section id="faq" className="py-20 lg:py-28 bg-gradient-to-t from-[#1a1a1a] to-background">
                    <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white">Pertanyaan Umum</h2>
                            <p className="mt-4 text-lg text-slate-400">Punya pertanyaan? Kami siap menjawab.</p>
                        </div>
                        <div className="space-y-2">
                            {faqs.map((faq, index) => (
                                <FaqItem key={index} faq={faq} index={index} openFaq={openFaq} setOpenFaq={setOpenFaq} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-t from-background to-[#1a1a1a] py-30 lg:py-30">
                    <div className="container mx-auto px-6 lg:px-8 text-center">
                         <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Siap Membuat Perbedaan Nyata?</h2>
                         <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">Bergabunglah dengan ribuan pahlawan lingkungan lainnya dan buktikan aksimu hari ini adalah investasi untuk masa depan bumi.</p>
                         <div className="mt-8">
                             <a href="#" className="inline-block px-12 py-4 font-bold text-lg text-gray-900 bg-green-500 rounded-lg hover:bg-green-600 transition-transform transform">
                                Daftar Gratis Sekarang!
                            </a>
                         </div>
                    </div>
                </section>

            </main>

            
            <footer className="bg-background border-t border-slate-500">
                <div className="container mx-auto px-6 lg:px-8 py-16">
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12">
                        
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-bold text-white">Karbon<span className="text-primary">Kita</span></h3>
                            <p className="mt-2 text-slate-400 max-w-xs">Platform gamifikasi untuk aksi iklim nyata. Mengubah kebiasaan, menyelamatkan planet.</p>
                            <div className="flex gap-5 mt-6">
                                <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors"><Twitter /></a>
                                <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors"><Instagram /></a>
                                <a href="#" className="text-slate-500 hover:text-teal-400 transition-colors"><Linkedin /></a>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-white tracking-wider uppercase">Produk</h4>
                            <ul className="mt-4 space-y-3">
                                <li><a href="#fitur" className="text-slate-400 hover:text-teal-400">Fitur</a></li>
                                <li><a href="#cara-kerja" className="text-slate-400 hover:text-teal-400">Cara Kerja</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-teal-400">Daftar Misi</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-white tracking-wider uppercase">Perusahaan</h4>
                            <ul className="mt-4 space-y-3">
                                <li><a href="#tentang" className="text-slate-400 hover:text-teal-400">Tentang Kami</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-teal-400">Blog</a></li>
                                <li><a href="#" className="text-slate-400 hover:text-teal-400">Kontak</a></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold text-white tracking-wider uppercase">Tetap Terhubung</h4>
                            <p className="mt-4 text-slate-400">Dapatkan update terbaru, misi spesial, dan berita dari kami.</p>
                            <form className="mt-4 flex">
                                <input type="email" placeholder="email@anda.com" className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white" />
                                <button type="submit" className="p-3 bg-teal-500 rounded-r-md hover:bg-teal-600">
                                    <Mail size={18} className="text-white"/>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-slate-800 pt-8 text-center md:text-left">
                        <p className="text-slate-500">&copy; {new Date().getFullYear()} KarbonKita. Semua Hak Cipta Dilindungi.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Home;