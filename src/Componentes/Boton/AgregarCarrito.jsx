function AgregarCarrito({ texto, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-medium cursor-pointer text-xs sm:text-sm py-1.5 px-3 sm:py-2 sm:px-4 rounded-3xl h-auto w-auto whitespace-nowrap"
    >
      {texto}
    </button>
  )
}

export default AgregarCarrito;