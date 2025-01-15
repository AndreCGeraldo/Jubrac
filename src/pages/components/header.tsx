"use client";

import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Fecha o menu
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-lg text-white font-mono z-50">
      <div className="flex justify-between items-center py-4 px-6 lg:px-16">
        {/* Logo da Jubrac */}
        <div className="flex items-center">
          <h2 className="text-lg font-bold">Jubrac</h2>
        </div>

        {/* Botão de menu no mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navegação centralizada, ajustada para mobile */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-black lg:bg-transparent shadow-lg lg:shadow-none justify-end lg:justify-start`}
        >
          <Link
            href="/"
            onClick={handleLinkClick}
            className="block px-6 py-2 lg:px-0 lg:py-0 text-white hover:text-amber-400"
          >
            HOME
          </Link>
          <Link
            href="#quemSomos"
            onClick={handleLinkClick}
            className="block px-6 py-2 lg:px-0 lg:py-0 text-white hover:text-amber-400"
          >
            QUEM SOMOS
          </Link>
          <Link
            href="#cultos"
            onClick={handleLinkClick}
            className="block px-6 py-2 lg:px-0 lg:py-0 text-white hover:text-amber-400"
          >
            CULTOS
          </Link>
          <Link
            href="#contato"
            onClick={handleLinkClick}
            className="block px-6 py-2 lg:px-0 lg:py-0 text-white hover:text-amber-400"
          >
            CONTATO
          </Link>
        </nav>

        {/* Redes sociais visíveis apenas no desktop */}
        <div className="hidden lg:flex space-x-4">
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
    </header>
  );
};

export default Header;
