import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BACKEND_URL =
    import.meta.env.VITE_API_BACKEND_URL || "http://localhost:3321";

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Terjadi kesalahan saat login.");
      }

      const accessToken = result.session;
      const refreshToken = result.refresh_token;

      if (!accessToken || !refreshToken) {
        throw new Error("Respons dari server tidak berisi token yang lengkap.");
      }

      const { error: sessionError } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (sessionError) {
        throw new Error("Gagal mengatur sesi di frontend.");
      }

      const role = result.role;

      if (role === "admin") {
        alert("selamat datang admin");
        navigate("/admin");
      } else {
        alert("Login berhasil!");
        navigate("/Home");
      }
    } catch (err) {
      console.error("Login Gagal:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary lg:bg-background min-h-screen flex items-center justify-center">
      <div className="w-full lg:h-screen bg-secondary shadow-xl overflow-hidden lg:grid lg:grid-cols-[1fr_2fr] lg:items-center">
        <div className="bg-gradient-to-br bg-secondary h-72 lg:h-full relative flex items-center justify-center">
          <div>
            <img src="/MentahanLogo.png" alt="Logo" className="w-60" />
          </div>
        </div>

        <div className="p-8 bg-background h-full rounded-tl-[80px] lg:rounded-tl-[100px] lg:flex lg:justify-center lg:flex-col">
          <h1 className="text-3xl lg:text-6xl text-center font-semibold lg:font-bold text-primary mb-8">
            Masuk
          </h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0"
                placeholder="yourname@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            )}

            <button
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 mt-8 disabled:opacity-70"
            >
              {loading ? "Memproses..." : "Login"}
            </button>
          </form>

          <div className="text-center mt-8">
            <span className="text-gray-400 text-sm">
              Anda Belum Memiliki akun?{" "}
            </span>
            <Link
              to="/register"
              className="text-primary font-semibold text-sm hover:underline"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
