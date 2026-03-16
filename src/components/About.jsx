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
          <h2 className="text-3xl font-bold text-gray-900">Sobre o curso</h2>

          <p className="mt-4 text-gray-600">
            Nosso curso foi criado para ajudar alunos a aprender inglês de forma
            prática e natural, focando principalmente na conversação.
          </p>

          <p className="mt-4 text-gray-600">
            Com uma metodologia simples e eficiente, você vai desenvolver
            confiança para falar inglês no dia a dia.
          </p>
        </div>
      </div>
    </section>
  );
}
