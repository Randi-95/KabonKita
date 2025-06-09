// src/context/AuthContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../supabaseClient';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [session, setSession] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );

        return () => {
            subscription?.unsubscribe();
        };
    }, []);

    useEffect(() => {
        if (session?.user) {
            setLoading(true); 
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
                    setLoading(false);
                });
        } else {
            setProfile(null);
        }
    }, [session]);

    const value = {
        session,
        user: session?.user ?? null,
        profile,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}