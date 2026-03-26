export default function Link({ text, href }) {
  return (
    <a
      href={href}
      className="bg-purple-900 text-white hover:bg-purple-700 rounded-full font-medium py-3 px-5 transition"
    >
      {text}
    </a>
  );
}
