export default function Link({ text, href }) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-blue-600 font-medium transition"
    >
      {text}
    </a>
  );
}
