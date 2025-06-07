import { Navigation, Zap, Trash2, HelpCircle } from 'react-feather';

function RingkasanMisi({ title,deskripsi, type, icon, points, borderColor, typeColor }) {
  const renderIkon = () => {
    // Kita gunakan switch case agar kodenya rapi
    switch (icon) {
      case 'Navigation':
        return <Navigation className={`w-6 h-6 ${typeColor}`} />;
      case 'Zap':
        return <Zap className={`w-6 h-6 ${typeColor}`} />;
      case 'Trash2':
        return <Trash2 className={`w-6 h-6 ${typeColor}`} />;
    }
  };
  
  return (
    <div className={`bg-secondary shadow-xl p-4 border-l-4 ${borderColor}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-lg font-mono font-bold ${typeColor}`}>
            {type}
          </span>
        </div>
      </div>
      <h2 className="text-white text-lg font-medium mb-2">{title}</h2>
      <div className="flex flex-col  justify-between">
        <p className="text-md text-gray-200">{deskripsi}</p>
        <div className=" text-gray-400 text-sm">
          <span>{points} poin</span>
        </div>
      </div>
    </div>
  );
}

export default RingkasanMisi;