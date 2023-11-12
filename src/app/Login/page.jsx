import Link from 'next/link';

const Login = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-gray-900 text-white min-h-screen">


      {/* Conteúdo da página de login */}
      <section className="container mx-auto flex items-center justify-center h-screen">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-8">Login</h2>
          {/* Adicione aqui os elementos do formulário de login */}
          <form className="flex flex-col space-y-4">
            {/* ... campos de login, senha, etc. */}
            <input
              type="text"
              placeholder="Nome de usuário"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Senha"
              className="bg-gray-700 text-white border-2 border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-6 rounded-full text-lg sm:text-xl transition duration-300 ease-in-out transform hover:scale-105">Entrar</button>
          </form>
          <p className="mt-4 text-gray-300">
            Não tem uma conta? <Link href="/Cadastro">Cadastre-se aqui</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
