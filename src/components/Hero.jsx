import Button from "./Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Aprenda inglês de forma
            <span className="text-blue-600"> simples e rápida</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Aulas práticas para você começar a falar inglês no dia a dia. Método
            focado em conversação e resultados reais.
          </p>

          <div className="mt-8 flex gap-4">
            <Button text="Saiba mais" />
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Students learning"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
