export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-700">
          Por que escolher nosso curso?
        </h2>

        <p className="mt-4 text-gray-600">
          Um método simples e eficiente para você aprender inglês de verdade
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold">Foco na conversação</h3>
            <p className="mt-3 text-gray-600">
              Aprenda a falar inglês no dia a dia com aulas práticas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold">Material completo</h3>
            <p className="mt-3 text-gray-600">
              Todo o conteúdo necessário para evoluir no idioma.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold">Resultados rápidos</h3>
            <p className="mt-3 text-gray-600">
              Método pensado para acelerar seu aprendizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
