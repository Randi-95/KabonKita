import { ArrowLeft,  } from "react-feather"
import Input from "../component/input"
import { Link } from "react-router-dom"

function LoginPage() {
    return(

      <div className="bg-secondary lg:bg-background min-h-screen flex items-center justify-center">
            <div className="w-full lg:h-screen bg-secondary  shadow-xl  overflow-hidden lg:grid lg:grid-cols-[1fr_2fr]  lg:items-center">
                <div className="bg-gradient-to-br bg-secondary h-72 lg:h-full relative flex items-center justify-center">
                    <div className="">
                        <img src="/MentahanLogo.png" alt="" className="w-60"/>
                    </div>
                </div>
                   
                <div className="p-8 bg-background h-full rounded-tl-[80px] lg:rounded-tl-[100px] lg:flex lg:justify-center lg:flex-col">
                    <h1 className="text-3xl lg:text-6xl text-center font-semibold lg:font-bold text-primary mb-8">Masuk</h1>
                    
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                            <input 
                                type="email" 
                                className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0" 
                                placeholder="yourname@email.com"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
                            <input 
                                type="password" 
                                className="w-full px-0 py-4 border-0 border-b border-gray-200 bg-transparent text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0" 
                                placeholder="••••••••"
                            />
                        </div>
                        
                        <button className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 mt-8 disabled:opacity-70">
                            Login
                        </button>
                    </div>
                    
                    <div className="text-center mt-8">
                        <span className="text-gray-400 text-sm">Anda Belum Memiliki akun? </span>
                        <Link to="/register" className="text-primary font-semibold text-sm hover:underline">Daftar</Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default LoginPage