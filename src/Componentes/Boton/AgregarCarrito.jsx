
function AgregarCarrito({texto}) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium cursor-pointer text-xs py-2 px-4 rounded-3xl h-auto w-auto">
      {texto}
    </button>
  )
}

export default AgregarCarrito;