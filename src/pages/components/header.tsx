import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-16 bg-black shadow-lg text-white font-mono z-50">
      {/* Logo da Jubrac */}
      <div className="flex items-center">
        <h2 className="text-lg font-bold">Jubrac</h2>
      </div>

      {/* Navegação centralizada */}
      <nav className="space-x-6">
        <Link href="/" className="text-white hover:text-amber-400">
          HOME
        </Link>
        <Link href="#quemSomos" className="text-white hover:text-amber-400">
          QUEM SOMOS
        </Link>
        <Link href="#cultos" className="text-white hover:text-amber-400">
          CULTOS
        </Link>
        <Link href="#contato" className="text-white hover:text-amber-400">
          CONTATO
        </Link>
      </nav>

      {/* Redes sociais à direita */}
      <div className="flex space-x-4">
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
    </header>
  );
};

export default Header;
