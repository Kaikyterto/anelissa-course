import Button from "./Button";
import anelisse from "../assets/anelisse.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-400 leading-tight">
            Domine o inglês em 2026
            <span className="text-purple-700 "> de forma eficiente</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Nada de turmas lotadas ou conteúdos genéricos. As aulas são
            individuais — somente você e a professora — ou em dupla (casais,
            amigos ou colegas), sempre com atenção total às suas necessidades,
            objetivos e ritmo de aprendizagem.
          </p>

          <div className="mt-8 flex gap-4">
            <Button text="Saiba mais" />
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src={anelisse}
            alt="Professora Anelisse"
            className="rounded-2xl shadow-xl drop-shadow-[0_0_5px_purple] drop-shadow-[0_0_15px_violet]"
          />
        </div>
      </div>
    </section>
  );
}
