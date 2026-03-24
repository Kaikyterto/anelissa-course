import Button from "./Button";
import anelisse from "../assets/anelisse.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center z-10">
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
            className="rounded-2xl shadow-xl drop-shadow-[0_0_5px_purple]"
          />
        </div>
      </div>
      {/* SVG Background Wave */}
      <div className="absolute bottom-0 left-0 w-full h-auto pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ff9966"
            fillOpacity="0.8"
            d="M0,192L80,176C160,160,320,128,480,144C640,160,800,224,960,240C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
