import Link from "next/link";

const Home = () => {
  return (
    <section className="relative flex items-center justify-center h-screen text-white bg-black">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img_banner1.jpg')" }}
      />

      {/* Sobreposição com gradiente e opacidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Jubrac Pelotas</h1>
        <p className="mt-6 text-base md:text-xl max-w-2xl mx-auto">
          Acreditamos que cada jovem tem um papel crucial a desempenhar no Reino
          de Deus. Venha fazer parte desse movimento e descubra como Deus pode
          transformar sua vida e a de outros ao seu redor!
        </p>
        <Link href="#quemSomos">
          <button className="mt-8 px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-purple-700 transition transform hover:scale-105">
            Saiba mais
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
