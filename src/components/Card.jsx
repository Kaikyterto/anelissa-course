export default function Card() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Escolha seu plano</h2>

        <p className="mt-4 text-gray-600">
          Planos acessíveis para você aprender inglês no seu ritmo
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Plano básico */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold">Básico</h3>
            <p className="text-3xl font-bold mt-4">R$79</p>

            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ 2 aulas por semana</li>
              <li>✔ Material incluso</li>
              <li>✔ Suporte por WhatsApp</li>
            </ul>

            <button className="mt-8 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-black transition">
              Escolher plano
            </button>
          </div>

          {/* Plano destaque */}
          <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl scale-105">
            <h3 className="text-xl font-semibold">Intermediário</h3>
            <p className="text-3xl font-bold mt-4">R$129</p>

            <ul className="mt-6 space-y-2">
              <li>✔ 3 aulas por semana</li>
              <li>✔ Material incluso</li>
              <li>✔ Grupo de conversação</li>
              <li>✔ Suporte prioritário</li>
            </ul>

            <button className="mt-8 w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Escolher plano
            </button>
          </div>

          {/* Plano premium */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold">Premium</h3>
            <p className="text-3xl font-bold mt-4">R$199</p>

            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ 5 aulas por semana</li>
              <li>✔ Material incluso</li>
              <li>✔ Conversação ilimitada</li>
              <li>✔ Mentoria individual</li>
            </ul>

            <button className="mt-8 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-black transition">
              Escolher plano
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
