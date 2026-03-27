import anelisse2 from "../assets/anelisse2.jpg";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-anne-pink">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* image2 */}
        <div className="flex justify-center">
          <img
            src={anelisse2}
            alt="Professora Anelisse"
            className="rounded-2xl shadow-xl drop-shadow-[0_0_5px_purple]"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold text-anne-purple">Sobre o curso</h2>

          <p className="mt-4 text-gray-600">
            Meu ensino combina quatro pilares essenciais para a fluência:
          </p>

          <p className="mt-4 text-gray-600">
            🔹 Prática guiada de fala Você fala desde a primeira aula, com
            suporte constante.
          </p>

          <p className="mt-4 text-gray-600">
            🔹 Input de qualidade Vocabulário e estruturas realmente usados por
            nativos.
          </p>

          <p className="mt-4 text-gray-600">
            🔹 Correção estratégica Feedback claro para acelerar sua evolução
            sem travar sua confiança.
          </p>

          <p className="mt-4 text-gray-600">
            🔹 Conteúdo adaptado aos seus objetivos Aulas personalizadas para
            Business English, viagens, conversação geral ou qualquer necessidade
            específica da sua rotina.
          </p>
        </div>
      </div>
    </section>
  );
}
