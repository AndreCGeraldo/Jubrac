import Image from "next/image";

const QuemSomos = () => {
  return (
    <section
      id="quemSomos"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between py-16 pb-0 px-8 md:px-20 bg-black"
    >
      {/* Descrição à esquerda */}
      <div className="md:w-1/2 w-full space-y-6 text-white">
        <h1
          className="text-5xl font-semibold bg-orange-500 text-center"
          style={{ fontFamily: "Monument, sans-serif", fontWeight: 600 }}
        >
          QUEM SOMOS
        </h1>
        <p className="text-lg text-white text-justify md:text-left">
          A Jubrac Pelotas é um movimento de jovens comprometidos em viver e
          proclamar o evangelho de Jesus Cristo. Nós acreditamos que cada jovem
          tem um papel fundamental na expansão do Reino de Deus, não apenas
          dentro da igreja, mas também em suas comunidades e no mundo. Nossa
          missão é capacitar, apoiar e discipular a juventude para que possam
          viver de forma autêntica sua fé, buscando sempre um relacionamento
          mais profundo com Deus.
        </p>
        <br />
        <p className="text-lg text-white text-justify md:text-left">
          Desde a nossa fundação, temos realizado eventos, encontros e
          atividades que proporcionam momentos de aprendizado, comunhão e
          crescimento espiritual. Nossa visão é ver uma geração de jovens
          transformados, que sejam luz nas suas famílias, escolas e trabalho,
          levando o amor de Cristo para todos ao seu redor.
        </p>
      </div>

      {/* Imagem à direita */}
      <div className="md:w-1/2 w-full flex justify-center items-center mt-8 md:mt-0">
        <Image
          src="/galera.jpeg" // Verifique se a imagem está na pasta correta
          alt="Imagem Jubrac Pelotas"
          width={600}
          height={600}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default QuemSomos;
