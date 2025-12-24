import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#philosophy" },
  { label: "Contact", href: "#cta" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-[rgba(0,0,0,0.6)] backdrop-blur-lg border-b border-white/10 transition-all duration-500">
      <div className="page-grid flex items-center justify-between h-[72px]">
        <Link
          href="#"
          className="text-lg font-medium tracking-tight text-ink hover:text-ink/90 transition-colors"
        >
          <Image src="/ghayasTechLogo.svg" alt="Ghayas Tech" width={100} height={100} priority />
        </Link>
        <div className="hidden md:flex items-center gap-8 nav-text">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative nav-text transition-colors hover:text-ink after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-white/30 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="#cta"
          className="button-text bg-accent text-white px-6 h-11 rounded-full flex items-center justify-center transition-colors duration-300 hover:brightness-110"
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}

