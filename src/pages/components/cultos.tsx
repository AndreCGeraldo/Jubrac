import MusicVideo from "./music-video";

const Cultos = () => {
  const photos = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <div
      id="cultos"
      className="min-h-screen bg-black text-white font-geist pt-32"
    >
      {/* Cabeçalho com título e descrição */}
      <header className="py-6 px-8 text-center bg-orange-500">
        <h1 className="text-4xl font-bold">Dias de Cultos</h1>
        <p className="mt-4 text-lg">
          Venha participar dos nossos encontros! Confira os horários e se
          conecte conosco.
        </p>
      </header>

      <main className="py-16 px-8 md:px-20 flex flex-col md:flex-row gap-12 md:items-start">
        {/* Seção de fotos com animações à esquerda */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="w-full h-40 md:h-60 overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={photo}
                alt={`Foto ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Informações sobre os dias de culto à direita */}
        <div className="flex-1 text-center md:text-right mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Horários dos Cultos</h2>
          <ul className="space-y-4">
            <li>
              <span className="block text-xl font-bold">Quinta-feira</span>
              <p className="text-gray-300">Culto de Adoração - 20h</p>
            </li>
            <li>
              <span className="block text-xl font-bold">Sábado</span>
              <p className="text-amber-400">
                Culto da JUBRAC no 2º Sábado do mês - 20h
              </p>
            </li>
            <li>
              <span className="block text-xl font-bold">Domingo</span>
              <p className="text-gray-300">Culto da Família - 20h</p>
            </li>
          </ul>
        </div>
      </main>
      {/* Vídeo Musical */}
      <div className="mt-20 w-full max-w-screen-lg mx-auto">
        <MusicVideo />
      </div>
    </div>
  );
};

export default Cultos;
