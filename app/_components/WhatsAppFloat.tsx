import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511976308934"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 rounded-full bg-white p-1.5 shadow-lg transition hover:scale-110 md:bottom-6 md:right-6"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon size={52} className="md:h-[58px] md:w-[58px]" />
    </a>
  );
}
