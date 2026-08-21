import Image from "next/image";

type WhatsAppButtonProps = {
  label: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

const sizes = {
  sm: { icon: 24, pad: "px-5 py-2.5 text-sm", gap: "gap-2.5" },
  md: { icon: 28, pad: "px-6 py-3.5 text-sm", gap: "gap-3" },
  lg: { icon: 32, pad: "px-8 py-4 text-base", gap: "gap-3.5" },
};

export default function WhatsAppButton({
  label,
  className = "",
  size = "md",
  fullWidth = false,
}: WhatsAppButtonProps) {
  const s = sizes[size];

  return (
    <a
      href="https://wa.me/5511976308934"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center ${s.gap} ${s.pad} rounded-full bg-[#f6c76d] font-semibold text-[#143a63] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <Image
        src="/whatsapp.png"
        alt=""
        width={s.icon}
        height={s.icon}
        className="h-auto w-auto shrink-0 object-contain"
        style={{ width: s.icon, height: s.icon }}
      />
      {label}
    </a>
  );
}
