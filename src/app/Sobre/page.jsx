import Link from 'next/link';

const Sobre = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-gray-900 text-white min-h-screen">


      {/* Conteúdo da página de login */}
      <section className="container mx-auto flex items-center justify-center h-screen">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-8">Sobre</h2>
          {/* Adicione aqui os elementos do formulário de login */}
          <form className="flex flex-col space-y-4">
            {/* ... campos de login, senha, etc. */}
            <h1>oi</h1>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
