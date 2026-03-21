export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Vídeo */}
        <div className="flex justify-center">
          <video controls className="rounded-2xl shadow-lg">
            <source src="/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold text-purple-700">Sobre o curso</h2>

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
