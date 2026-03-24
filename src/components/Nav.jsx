import { useState } from "react";
import Button from "./Button";
import Link from "./Link";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky z-50 top-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <img
          src={logo}
          alt="Anelisse course"
          className="rounded-2xl  w-20 h-16"
        />

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <Link text="Home" href="#" />
          <Link text="Sobre" href="#sobre" />
          <Link text="Cursos" href="#cursos" />
          <Link text="Contato" href="#contato" />
        </div>

        <div className="hidden md:block">
          <Button text="Começar agora" />
        </div>

        {/* Botão Sanduíche (Mobile) */}
        <button
          className="md:hidden text-purple-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[500px] opacity-100 border-t border-gray-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 gap-6">
          <div onClick={() => setIsOpen(false)}>
            <Link text="Home" href="#" />
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link text="Sobre" href="#sobre" />
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link text="Cursos" href="#cursos" />
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Link text="Contato" href="#contato" />
          </div>
          <div className="mt-2" onClick={() => setIsOpen(false)}>
            <Button text="Começar agora" />
          </div>
        </div>
      </div>
    </nav>
  );
}
