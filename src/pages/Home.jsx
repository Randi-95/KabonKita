import React from 'react';
import { ArrowRight, PlayCircle } from 'react-feather';


function Home() {
  return (
    <div className="bg-background min-h-screen text-white"> 
      
      <section className="container mx-auto px-6 lg:px-8 py-20 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
              Jadilah Pahlawan Bumi,
            </span>
            <br />
            Satu Misi Sekaligus.
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            Ubah kebiasaan kecilmu menjadi aksi nyata untuk lingkungan melalui misi seru dan berhadiah di KarbonKita.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 font-semibold text-gray-900 bg-green-500 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105">
              <span>Daftar & Mulai Misimu</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img 
            alt="Ilustrasi" 
            className="w-full max-w-lg mx-auto" 
          />
        </div>

      </section>
      
      
    </div>
  );
}

export default Home;