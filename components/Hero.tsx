import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="section hero-section" id="hero">
      <div className="page-grid grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-8 animate-fadeUp">
          <h1 className="h1 text-ink">
            Ghayas Tech — We build digital experiences that feel effortless.
          </h1>
          <p className="body-muted max-w-2xl">
            Premium website design and development for brands that care about
            quality, performance, and detail.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#cta"
              className="button-text bg-accent text-white px-8 h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:brightness-110"
            >
              Start a Project
            </Link>
            <Link
              href="#work"
              className="button-text px-8 h-12 rounded-full border border-white/25 text-ink flex items-center justify-center transition-colors duration-300 hover:border-white/40 hover:text-ink"
            >
              View Our Work
            </Link>
          </div>
        </div>
        <div className="relative animate-fadeUp">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--bg-card)] shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            <Image
              src="/hero.jpg"
              alt="Abstract technology interface"
              width={900}
              height={520}
              priority
              className="w-full h-full max-h-[520px] object-cover filter grayscale hero-light-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}   

