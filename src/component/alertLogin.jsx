import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'react-feather'; 

function AlertLogin({ message }) {
  return (
    <div className="flex justify-center items-center h-full min-h-[60vh] bg-background">
      <div className="text-center p-8 bg-secondary rounded-xl shadow-lg max-w-md mx-auto">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary">
          <LogIn className="h-6 w-6 text-background" />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-200">
          Akses Terbatas
        </h2>
        <p className="mt-2 text-gray-400">
          {message || "Untuk melanjutkan dan mengakses fitur ini, Anda harus login terlebih dahulu."}
        </p>
        <div className="mt-6">
          <Link
            to="/login"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-primary text-base font-bold text-background hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-primary transition-colors"
          >
            Pergi ke Halaman Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AlertLogin;