import { createContext, useState, useEffect } from "react";

export const MisiSubmitContext = createContext();

export const MisiSubmitProvider = ({ children }) => {
  const [aktifSubmit, setAktifSubmit] = useState(() => {
    try {
      const savedMisi = sessionStorage.getItem("misiAktif");
      
      return savedMisi ? JSON.parse(savedMisi) : null;
    } catch (error) {
      console.error("Gagal mengambil data misi dari session storage:", error);
      return null;
    }
  });

  useEffect(() => {
    try {
      if (aktifSubmit) {
        
        sessionStorage.setItem("misiAktif", JSON.stringify(aktifSubmit));
      } else {

        sessionStorage.removeItem("misiAktif");
      }
    } catch (error) {
      console.error("Gagal menyimpan data misi ke session storage:", error);
    }
  }, [aktifSubmit]); 
  return (
    <MisiSubmitContext.Provider value={{ aktifSubmit, setAktifSubmit }}>
      {children}
    </MisiSubmitContext.Provider>
  );
};