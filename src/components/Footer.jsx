import logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 text-center items-center">
        {/* Logo / descrição */}
        <div>
          <div className="max-w-sm overflow-hidden rounded-lg shadow-lg mx-auto">
            <img
              src={logo}
              alt="Logo Anelisse Course"
              className="w-full h-48 object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Aprenda inglês de forma simples e prática com aulas focadas em
            conversação e resultados reais.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contato</h3>
          <p className="text-sm">📧 email@email.com</p>
          <p className="text-sm">📱 (81) 99999-9999</p>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © 2026 MyLanding. Todos os direitos reservados.
      </div>
    </footer>
  );
}
