import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "High-performance website for a modern brand",
    type: "Case study",
    detail: "Designed and built with clarity, speed, and elegance.",
    image: "/siteuicard1.jpg",
    slug: "high-performance-brand"
  },
  {
    title: "Conversion-focused experience for a B2B leader",
    type: "Case study",
    detail: "Premium storytelling paired with engineering precision.",
    image: "/siteuicard2.jpg",
    slug: "b2b-leader-experience"
  },
  {
    title: "Product landing for an innovative startup",
    type: "Case study",
    detail: "Calm interface, seamless performance, launch-ready.",
    image: "/siteuicard3.jpg",
    slug: "innovative-startup-landing"
  }
];

export function Work() {
  return (
    <section className="section border-t border-white/10" id="work">
      <div className="page-grid space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="h2 text-ink">Selected work</h2>
          <span className="text-sm text-mute hidden md:block">
            Focus on outcomes, not hype
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={`/work/${project.slug}`}
              className={`group border border-white/10 rounded-3xl overflow-hidden bg-[var(--bg-card)] transition-transform duration-[400ms] ease-soft hover:-translate-y-2 hover:border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.35)] block ${
                index === 0
                  ? "apple-fade-in"
                  : index === 1
                  ? "apple-fade-in-delay-1"
                  : "apple-fade-in-delay-2"
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/55 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={224}
                  loading="lazy"
                  quality={70}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full object-cover filter grayscale"
                />
              </div>
              <div className="p-6 space-y-2">
                <p className="small text-mute">{project.type}</p>
                <h3 className="h4">{project.title}</h3>
                <p className="body-muted">{project.detail}</p>
                <span className="button-text text-accent inline-flex items-center gap-1 link-underline">
                  View details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

