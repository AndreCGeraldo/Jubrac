import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 font-mono">
      <div className="container mx-auto px-4">
        {/* Grid para navegação e localização */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Links de navegação e redes sociais */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Jubrac Pelotas</h2>
            <nav className="space-y-2">
              <Link href="/" className="text-gray-400 hover:text-amber-400">
                Home
              </Link>
              <br />
              <Link
                href="/passaporte"
                className="text-gray-400 hover:text-amber-400"
              >
                Quem Somos
              </Link>
              <br />
              <Link
                href="/checklist"
                className="text-gray-400 hover:text-amber-400"
              >
                Cultos
              </Link>
              <br />
              <Link
                href="/sobre"
                className="text-gray-400 hover:text-amber-400"
              >
                Contato
              </Link>
            </nav>

            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.facebook.com/jubrac.pel"
                target="_blank"
                className="text-white hover:text-sky-500"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/jubracpelotas"
                target="_blank"
                className="text-white hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://www.youtube.com/@obpcpel"
                target="_blank"
                className="text-white hover:text-red-500"
              >
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>

          {/* Localização via Google Maps */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Localização</h2>
            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.517628605229!2d-52.35157!3d-31.7223387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b55297798089%3A0x599e5b299d04f765!2sR.%20S%C3%A3o%20Jo%C3%A3o%2C%20391%20-%20Tres%20Vendas%2C%20Pelotas%20-%20RS%2C%2096065-490!5e0!3m2!1spt-BR!2sbr!4v1697307407801!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} Jubrac Pelotas. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
