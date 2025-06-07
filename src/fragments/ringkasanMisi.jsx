function RingkasanMisi({ title,deskripsi, type, icon, points, borderColor, typeColor }) {
  return (
    <div className={`bg-secondary shadow-xl p-4 border-l-4 ${borderColor}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            {icon}
          </div>
          <span className={`text-md font-mono font-bold ${typeColor}`}>
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