export default function Link({ text, href }) {
  return (
    <a
      href={href}
      className="text-orange-400 hover:text-white hover:bg-purple-600  rounded-full font-medium  py-3 px-5 transition"
    >
      {text}
    </a>
  );
}
