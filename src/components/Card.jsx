import Link from "./Link";

export default function Card() {
  return (
    <section id="card" className="py-20 bg-anne-pink">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-anne-purple">
          Escolha seu plano
        </h2>

        <p className="mt-4 text-gray-600">
          Planos acessíveis para você aprender inglês no seu ritmo
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Plano básico */}
          <div className="bg-anne-bg-peach p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold">Básico</h3>
            <p className="text-3xl font-bold mt-4">R$300 mensal</p>

            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ 1 aulas por semana</li>
            </ul>

            <Link
              text="Escolher Plano"
              href="https://wa.me/5545998172267?text=Olá! Gostaria de assinar o plano básico."
              className="mt-8 w-full block text-center"
            />
          </div>

          {/* Plano destaque */}
          <div className="bg-anne-gold text-white p-8 rounded-2xl shadow-xl scale-105">
            <h3 className="text-xl font-semibold text-anne-purple">
              Intermediário
            </h3>
            <p className="text-3xl font-bold mt-4 text-anne-purple">
              R$540 mensal
            </p>

            <ul className="mt-6 space-y-2 text-anne-purple">
              <li>✔ 2 aulas por semana</li>
            </ul>

            <Link
              text="Escolher Plano"
              href="https://wa.me/5545998172267?text=Olá! Gostaria de assinar o plano intermediário."
              className="mt-8 w-full block text-center"
            />
          </div>

          {/* Plano premium */}
          <div className="bg-anne-bg-peach p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold">Premium</h3>
            <p className="text-3xl font-bold mt-4">R$765 mensal</p>

            <ul className="mt-6 space-y-2 text-gray-600">
              <li>✔ 3 aulas por semana</li>
            </ul>

            <Link
              text="Escolher Plano"
              href="https://wa.me/5545998172267?text=Olá! Gostaria de assinar o plano premium."
              className="mt-8 w-full block text-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
