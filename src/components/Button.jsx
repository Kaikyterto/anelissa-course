export default function Button({ text, className }) {
  return (
    <button
      className={`${className} bg-purple-900 hover:bg-purple-700 hover:scale-105 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 `}
    >
      {text}
    </button>
  );
}
