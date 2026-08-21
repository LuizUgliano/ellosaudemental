import Image from "next/image";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511976308934"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 transition hover:scale-110 md:bottom-6 md:right-6"
      aria-label="Falar no WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt=""
        width={64}
        height={64}
        className="h-14 w-14 drop-shadow-lg md:h-16 md:w-16"
      />
    </a>
  );
}
