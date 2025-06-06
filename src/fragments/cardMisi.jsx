function CardMisi() {
  return (
    <div className="bg-secondary shadow-xl rounded-lg p-4 border-l-4 border-primary">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 p-1 bg-primary rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" viewBox="0 0 24 24" 
                fill="none" stroke="white" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                class="lucide lucide-tree-deciduous">
            <path d="M8 19a4 4 0 0 1-2-7.5 4 4 0 0 1 4-6.5h4a4 4 0 0 1 4 6.5 4 4 0 0 1-2 7.5"/>
            <path d="M12 19v3"/>
            <path d="M12 15v4"/>
            </svg>


          </div>
          <span className="text-primary text-sm font-semibold">Harian</span>
        </div>
      </div>

      <h2 className="text-white text-lg font-medium mb-4  decoration-gray-500">
        Mematikan Lampu saat tidak digunakan
      </h2>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <span>100 poin</span>
        </div>
      </div>
    </div>
  );
}

export default CardMisi