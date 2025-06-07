import { Navigation,Zap, Trash2 } from "react-feather";
import { data, Link } from "react-router-dom";

function CardMobilitasHijau({ title, points }) {

  return (
    
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            <Navigation className="text-green-400"/>
          </div>
          <span className="text-md font-mono font-bold text-green-400">
            Mobilitas Hijau
          </span>
        </div>
      </div>

      <h2 className="text-white text-lg font-medium mb-4 decoration-gray-500">
        {title}
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <span>{points} poin</span>
        </div>
      </div>
    </>
  );
}

function CardHematEnergi({ title, points }) {
  return (
    
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
               <Zap className="text-yellow-400"/>
          </div>
          <span className="text-md font-mono font-bold text-yellow-400">
            Hemat Energi
          </span>
        </div>
      </div>

      <h2 className="text-white text-lg font-medium mb-4 decoration-gray-500">
        {title}
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <span>{points} poin</span>
        </div>
      </div>
    </>
  );
}

function CardKebersihan({ title, points }) {
  return (
    
    <>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
             <Trash2 className="text-red-400"/>
          </div>
          <span className="text-md font-mono font-bold text-red-400">
            Kebersihan
          </span>
        </div>
      </div>

      <h2 className="text-white text-lg font-medium mb-4 decoration-gray-500">
        {title}
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <span>{points} poin</span>
        </div>
      </div>
    </>
  );
}

export { CardMobilitasHijau, CardHematEnergi, CardKebersihan };
