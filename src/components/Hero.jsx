import Link from "./Link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-anne-bg-peach overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 flex  gap-10  z-10 ">
        {/* Texto */}
        <div className="w-full mx-5 ">
          <h1 className="text-4xl md:text-5xl font-bold text-anne-purple leading-tight">
            Domine o inglês em 2026
            <span className="text-anne-pink "> de forma eficiente</span>
          </h1>

          <p className="mt-8 text-lg text-gray-600">
            Nada de turmas lotadas ou conteúdos genéricos. As aulas são
            individuais — somente você e a professora — ou em dupla (casais,
            amigos ou colegas), sempre com atenção total às suas necessidades,
            objetivos e ritmo de aprendizagem.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              text="Saiba mais"
              href="https://wa.me/554599817267?text=Olá! Gostaria de saber mais informações."
            />
          </div>
        </div>
      </div>
      {/* SVG Background Wave */}
      <div className="absolute bottom-0 left-0 w-full h-auto pointer-events-none">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F4C078"
            fillOpacity="0.8"
            d="M0,192L80,176C160,160,320,128,480,144C640,160,800,224,960,240C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
