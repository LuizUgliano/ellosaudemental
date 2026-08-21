import Image from "next/image";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511976308934"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 transition hover:scale-110 md:bottom-6 md:left-6"
      aria-label="Falar no WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt=""
        width={58}
        height={58}
        className="drop-shadow-lg md:h-[68px] md:w-[68px]"
      />
    </a>
  );
}
