import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511976308934"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 transition hover:scale-110 md:bottom-6 md:right-6"
      aria-label="Falar no WhatsApp"
    >
      <span className="md:hidden">
        <WhatsAppIcon size={56} />
      </span>
      <span className="hidden md:inline">
        <WhatsAppIcon size={64} />
      </span>
    </a>
  );
}
