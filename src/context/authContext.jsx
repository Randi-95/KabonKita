// src/context/AuthContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../supabaseClient'; // Pastikan path ini benar

// Ekspor AuthContext agar bisa digunakan oleh custom hook
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Langkah 1: Dapatkan sesi yang ada saat ini secara langsung.
        // Tujuannya adalah untuk secepat mungkin mengubah state 'loading' menjadi false.
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            // Kita hentikan loading di sini agar aplikasi tidak blank.
            // Pemuatan profil akan menyusul jika ada sesi.
            setLoading(false);
        });

        // Langkah 2: Buat listener yang akan bereaksi terhadap LOGIN dan LOGOUT.
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                // Saat ada perubahan (login/logout), cukup update sesi.
                // Perubahan sesi ini akan memicu useEffect lain untuk mengambil profil.
                setSession(session);
            }
        );

        // Cleanup listener saat komponen dibongkar
        return () => {
            subscription?.unsubscribe();
        };
    }, []);

    // useEffect KEDUA: Khusus untuk mengambil data profil.
    // Efek ini akan berjalan setiap kali 'session' berubah.
    useEffect(() => {
        if (session?.user) {
            // Jika ada sesi, ambil profil pengguna.
            setLoading(true); // Mulai loading lagi khusus untuk profil
            supabase
                .from('user_profile')
                .select('*')
                .eq('user_id', session.user.id)
                .single()
                .then(({ data, error }) => {
                    if (error) {
                        console.error("AuthContext: Gagal mengambil profil.", error.message);
                    }
                    setProfile(data ?? null);
                    setLoading(false); // Selesai loading profil
                });
        } else {
            // Jika tidak ada sesi (logout), kosongkan profil
            setProfile(null);
        }
    }, [session]); // Bergantung pada 'session'

    // Nilai yang disediakan untuk semua komponen
    const value = {
        session,
        user: session?.user ?? null,
        profile,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {/* Kita tidak lagi memerlukan '!loading' di sini, 
                karena setiap halaman akan menangani loading-nya sendiri.
                Ini adalah pola yang lebih fleksibel. */}
            {children}
        </AuthContext.Provider>
    );
}