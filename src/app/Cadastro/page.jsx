import Link from 'next/link';

const Cadastro = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-gray-900 text-white min-h-screen">


      {/* Conteúdo da página de cadastro */}
      <section className="container mx-auto text-center py-24">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mx-auto w-full">
          <h2 className="text-3xl font-semibold mb-8">Cadastro</h2>
          {/* Adicione aqui os elementos do formulário de cadastro */}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Senha"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Sobrenome"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="CPF"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="CEP"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Cidade"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Telefone"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Logradouro"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Bairro"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105">Cadastrar</button>
          </form>
          <p className="mt-4 text-gray-300">
            Já tem uma conta? <Link href="/Login">Faça login aqui</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cadastro;
