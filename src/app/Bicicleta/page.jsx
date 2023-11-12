// pages/bicicleta.js
import Link from 'next/link';

const Bicicleta = () => {
  return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">


      {/* Conteúdo da página de bicicleta */}
      <section className="container mx-auto text-center py-24">
        <h2 className="text-3xl font-semibold mb-8">Bicicleta</h2>
        {/* Formulário de Informações da Bicicleta */}
        <form className="max-w-md mx-auto p-4 bg-gray-800 rounded-md">
          {/* Adicione os campos do formulário conforme necessário */}
          <div>
            <label htmlFor="marca" className="block text-lg font-semibold mb-2">Marca</label>
            <input type="text" id="marca" name="marca" className="w-full p-2 border rounded-md bg-gray-700 text-white" />
          </div>
          <div>
            <label htmlFor="modelo" className="block text-lg font-semibold mb-2">Modelo</label>
            <input type="text" id="modelo" name="modelo" className="w-full p-2 border rounded-md bg-gray-700 text-white" />
          </div>
          <div>
            <label htmlFor="ano" className="block text-lg font-semibold mb-2">Ano</label>
            <input type="text" id="ano" name="ano" className="w-full p-2 border rounded-md bg-gray-700 text-white" />
          </div>
          {/* ... outros campos */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Bicicleta;
