import Footer from "@/pages/components/footer";
import Header from "@/pages/components/header";
import Hero from "@/pages/components/hero";
import QuemSomos from "@/pages/components/quemSomos";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-geist">
      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-grow">
        <Hero />
        <QuemSomos />
      </main>

      {/* Footer fixo na parte inferior */}
      <Footer />
    </div>
  );
}
