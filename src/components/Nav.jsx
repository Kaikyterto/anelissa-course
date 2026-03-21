import Button from "./Button";
import Link from "./Link";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <img
          src={logo}
          alt="Anelisse course"
          className="rounded-2xl  w-20 h-16"
        />

        <div className="hidden md:flex gap-8">
          <Link text="Home" href="#" />
          <Link text="Sobre" href="#sobre" />
          <Link text="Cursos" href="#cursos" />
          <Link text="Contato" href="#contato" />
        </div>

        <Button text="Começar agora" />
      </div>
    </nav>
  );
}
