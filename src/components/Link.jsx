export default function Link({ text, href, className }) {
  return (
    <a
      href={href}
      className={`bg-anne-purple text-white hover:bg-purple-700 rounded-full font-medium py-3 px-5 transition ${className}`}
    >
      {text}
    </a>
  );
}
