import logo from "../assets/EnglishwithAnne.png";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 mt-20">
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
          <p className="text-sm">📱 (45) 99817-2267</p>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        <p>
          © 2026 English with Anne. Todos os direitos reservados. Developed by{" "}
          <a href="http://www.linkedin.com/in/kaiky-santos-510b6b2a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            Kaiky Terto{" "}
          </a>
          &{" "}
          <a href="https://www.linkedin.com/in/pedro-lucena-/">Pedro Lucena</a>
        </p>
      </div>
    </footer>
  );
}
