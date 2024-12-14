import Cultos from "@/pages/components/cultos";
import Footer from "@/pages/components/footer";
import Header from "@/pages/components/header";
import Hero from "@/pages/components/home";
import QuemSomos from "@/pages/components/quemSomos";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-geist">
      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-grow">
        <Hero />
        <QuemSomos />
        <Cultos />
      </main>

      {/* Footer fixo na parte inferior */}
      <Footer />
    </div>
  );
}
