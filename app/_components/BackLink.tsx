import Link from "next/link";

type BackLinkProps = {
  href?: string;
  label?: string;
  light?: boolean;
};

export default function BackLink({
  href = "/",
  label = "Voltar para a página inicial",
  light = false,
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`mb-6 inline-flex items-center gap-2 text-sm font-semibold transition ${
        light
          ? "text-white/90 hover:text-white"
          : "text-[#143a63] hover:text-[#347fb3]"
      }`}
    >
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
}
