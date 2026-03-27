export default function WhatsappButton() {
  const phone = "5545998172267";
  const message = "Olá! Gostaria de saber mais informações.";

  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* efeito pulsando */}
      <span className="absolute h-14 w-14 rounded-full bg-green-400 opacity-75 animate-ping"></span>

      {/* botão */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.99.52 3.93 1.52 5.65L2 22l4.47-1.47A9.94 9.94 0 0012.04 22c5.52 0 10.01-4.49 10.01-10S17.56 2 12.04 2zm0 18.18c-1.73 0-3.42-.46-4.9-1.33l-.35-.21-2.65.87.87-2.58-.23-.37A8.17 8.17 0 013.87 12c0-4.51 3.67-8.18 8.17-8.18s8.18 3.67 8.18 8.18-3.67 8.18-8.18 8.18zm4.48-6.13c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.12-.57.12-.17.25-.65.8-.8.96-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.25-.74-.66-1.24-1.48-1.38-1.73-.14-.25-.01-.39.11-.51.11-.11.25-.3.37-.45.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.12.17 1.8 2.75 4.36 3.85.61.26 1.08.41 1.45.53.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.09-.23-.14-.48-.26z" />
        </svg>
      </a>
    </div>
  );
}
