import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-medium text-blue-900">{question}</h4>
        <svg
          className={`w-5 h-5 text-blue-900 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 mt-4" : "max-h-0"}`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "Preciso saber inglês para começar?",
      answer:
        "Não. Atendo desde iniciantes até avançados.",
    },
    {
      question: "E se eu precisar remarcar uma sessão?",
      answer:
        " Sim, 100% online e ao vivo.",
    },
    {
      question: "Quanto tempo leva para ficar fluente?",
      answer:
        " Com base no seu nível de inglês atual, e o plano escolhido, iremos traçar na primeira um planejamento de estudos personalizados para atingir sua fluência no menor tempo.",
    },
    {
      question: "Por quanto tempo preciso fazer aulas?",
      answer:
        "O acompanhamento é personalizado e flexível, e você pode ajustar a frequência ou encerrar quando sentir que atingiu seus objetivos.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
