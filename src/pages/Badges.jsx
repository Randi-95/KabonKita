import { ArrowLeft } from "react-feather";
import NavDashboard from "../fragments/navDashboard";
import { ArrowRight, Medal } from "lucide-react";

function LencanaPage() {
    return(
        <div className="h-fit pb-20 bg-background ">
           <NavDashboard/>
           <div className="lg:w-3/4 lg:absolute lg:right-0">

              <div className="flex flex-col gap-30">
                <div className="flex justify-between p-2 items-center">
                    <div className="">
                        <ArrowLeft className="text-gray-200"  size="30px"/>
                    </div>
                    <h2 className="text-gray-200 font-semibold font-mono text-2xl">Lencana Randi</h2>
                    <div className="">
                        <Medal className="text-gray-200" size="30px"/>
                    </div>
                </div>


                <div className="h-auto w-full bg-secondary rounded-t-xl shadow-xl">
                    <div className="flex justify-center">
                        <div className="w-30 border-4 border-secondary shadow-lg rounded-full p-2 bg-background -translate-y-15">
                            <img src="/lencana.png" alt="" />
                        </div>
                    </div>

                    <div className="p-2 flex flex-col gap-2">
                        <div className="flex items-center justify-between shadow-lg rounded-lg p-2">
                            <div className="flex items-center gap-2">
                                <div className="shadow-xl w-fit p-2 rounded-full bg-background border-3 border-secondary">
                                    <img src="/lencana.png" alt="" className="w-14"/>
                                </div>
                                <div className="">
                                    <h2 className="font-bold text-xl text-gray-300">Level 1 Pemula</h2>
                                    <p className="text-gray-400 text-xs">Capai 250 point untuk Lencana</p>
                                </div>
                            </div>

                            <div className="">
                                <ArrowRight className="text-gray-300" size="30px"/>
                            </div>
                        </div>

                        <div className="flex items-center justify-between shadow-lg rounded-lg p-2">
                            <div className="flex items-center gap-2">
                                <div className="shadow-xl w-fit p-2 rounded-full bg-background border-3 border-secondary">
                                    <img src="/lencana2.png" alt="" className="w-14"/>
                                </div>
                                <div className="">
                                    <h2 className="font-bold text-xl text-gray-300">Level 2 Penggiat </h2>
                                    <p className="text-gray-400 text-xs">Capai 250 point untuk Lencana</p>
                                </div>
                            </div>

                            <div className="">
                                <ArrowRight className="text-gray-300" size="30px"/>
                            </div>
                        </div>

                        <div className="flex items-center justify-between shadow-lg rounded-lg p-2">
                            <div className="flex items-center gap-2">
                                <div className="shadow-xl w-fit p-2 rounded-full bg-background border-3 border-secondary">
                                    <img src="/lencana3.png" alt="" className="w-14"/>
                                </div>
                                <div className="">
                                    <h2 className="font-bold text-xl text-gray-300">Level 3 Pakar</h2>
                                    <p className="text-gray-400 text-xs">Capai 250 point untuk Lencana</p>
                                </div>
                            </div>

                            <div className="">
                                <ArrowRight className="text-gray-300" size="30px"/>
                            </div>
                        </div>

                        <div className="flex items-center justify-between shadow-lg rounded-lg p-2">
                            <div className="flex items-center gap-2">
                                <div className="shadow-xl w-fit p-2 rounded-full bg-background border-3 border-secondary">
                                    <img src="/lencana4.png" alt="" className="w-14"/>
                                </div>
                                <div className="">
                                    <h2 className="font-bold text-xl text-gray-300">Level 4 Master</h2>
                                    <p className="text-gray-400 text-xs">Capai 250 point untuk Lencana</p>
                                </div>
                            </div>

                            <div className="">
                                <ArrowRight className="text-gray-300" size="30px"/>
                            </div>
                        </div>

                        <div className="flex items-center justify-between shadow-lg rounded-lg p-2">
                            <div className="flex items-center gap-2">
                                <div className="shadow-xl w-fit p-2 rounded-full bg-background border-3 border-secondary">
                                    <img src="/lencana5.png" alt="" className="w-14"/>
                                </div>
                                <div className="">
                                    <h2 className="font-bold text-xl text-gray-300">Level 5 Avatar</h2>
                                    <p className="text-gray-400 text-xs">Capai 250 point untuk Lencana</p>
                                </div>
                            </div>

                            <div className="">
                                <ArrowRight className="text-gray-300" size="30px"/>
                            </div>
                        </div>

                   
                    </div>
                </div>
              </div>
           </div>
        </div>
    )
}

export default LencanaPage;