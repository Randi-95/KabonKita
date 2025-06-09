import { ArrowLeft, Trophy } from "lucide-react";
import { Award, Clock, Star } from "react-feather";
import { Link } from "react-router-dom";

function RiwayatPage () {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <Link to="/Home" >
                    <ArrowLeft className="text-gray-300" size="30px"/>
                </Link>
                <h2 className="text-gray-300 font-bold text-xl">Riwayat</h2>
                <Clock className="text-gray-300" size="30px"/>
            </div>

            <div className="flex justify-center mt-4">
                <div className="bg-gradient-to-br w-full from-primary via-primary to-green-900 rounded-2xl p-6 relative overflow-hidden">
                  <div className="mb-6 relative h-24 flex items-center justify-center">
                    <div className="relative">
                      <div className="flex items-end space-x-1">
                        <Award className="text-white/60" size="50px" />
                        <Star
                          className="text-white/60 -translate-x-2 translate-y-4"
                          size="30px"
                        />
                      </div>

                      <div className="absolute -right-6 -top-10">
                        <Trophy className="text-white/60" size="50px" />
                      </div>

                      <div className="absolute -left-4 top-0 w-6 h-6 bg-white/20 rounded-full"></div>
                      <div className="absolute -right-2 bottom-2 w-4 h-4 bg-white/15 rounded-full"></div>
                      <div className="absolute -left-40 bottom-2 w-10 h-10 bg-white/15 rounded-full"></div>
                    </div>
                  </div>

                  <div className="relative z-10 bg-gray-800 rounded-xl p-4">
                    <h3 className="text-white font-bold text-lg mb-3">
                      Jejak Kebaikanmu
                    </h3>

                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-2">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">
                        Total 200 Poin Hijau telah terkumpul.
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
                  <div className="absolute top-8 right-12 w-6 h-6 bg-white/5 rounded-full"></div>
                  <div className="absolute bottom-20 left-4 w-8 h-8 bg-white/8 rounded-full"></div>
                </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
                
                <div className="flex items-center bg-background border border-primary rounded-lg p-2 shadow-xl px-4">
                    <div className="flex-grow">
                        <p className="font-semibold text-white text-md font-mono">Ekspedisi Gowes Pagi</p>
                    </div>
                            
                    <div className="text-right">
                        <p className="text-md font-bold text-green-300">Diterima</p>
                        <p className="text-xs font-semibold text-slate-400 font-mono">200 POIN</p>
                    </div>
                </div>

                <div className="flex items-center bg-background border border-primary rounded-lg p-2 shadow-xl px-4">
                    <div className="flex-grow">
                        <p className="font-semibold text-white text-md font-mono">Misi Bebas Asap</p>
                    </div>
                            
                    <div className="text-right">
                        <p className="text-md font-bold text-yellow-300">Tertunda</p>
                        <p className="text-xs font-semibold text-slate-400 font-mono">200 POIN</p>
                    </div>
                </div>

                <div className="flex items-center bg-background border border-primary rounded-lg p-2 shadow-xl px-4">
                    <div className="flex-grow">
                        <p className="font-semibold text-white text-md font-mono">Jurus Mandi Cepat</p>
                    </div>
                            
                    <div className="text-right">
                        <p className="text-md font-bold text-red-400">Ditolak</p>
                        <p className="text-xs font-semibold text-slate-400 font-mono">0 POIN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiwayatPage;