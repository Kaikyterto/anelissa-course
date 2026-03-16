export default function Button({ text }) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-300">
      {text}
    </button>
  );
}
