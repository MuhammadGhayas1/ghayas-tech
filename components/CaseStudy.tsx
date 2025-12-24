import Link from "next/link";
import Image from "next/image";

interface CaseStudyProps {
  title: string;
  summary: string;
  role: string;
  focus: string;
  status: string;
  challenge: string;
  approach: string[];
  highlights: Array<{ title: string; description: string; image?: string }>;
  outcomes: string[];
  reflection: string;
  nextProjectTitle?: string;
  nextProjectSummary?: string;
}

export function CaseStudy({
  title,
  summary,
  role,
  focus,
  status,
  challenge,
  approach,
  highlights,
  outcomes,
  reflection,
  nextProjectTitle,
  nextProjectSummary
}: CaseStudyProps) {
  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: summary,
    creator: {
      "@type": "Organization",
      name: "Ghayas Tech"
    },
    about: focus
  };

  return (
    <main className="bg-[var(--bg-primary)] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <div className="page-grid">
        {/* Hero Section */}
        <section className="section-hero pt-24 pb-16">
          <div className="space-y-6 max-w-3xl">
            <h1 className="h1 text-ink">{title}</h1>
            <p className="subheading text-mute">{summary}</p>
            <div className="flex flex-wrap gap-6 text-sm text-mute pt-4">
              <span>Role: {role}</span>
              <span>Focus: {focus}</span>
              <span>Status: {status}</span>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section py-16 border-t border-white/10">
          <div className="max-w-3xl space-y-4">
            <h2 className="h2 text-ink">The challenge</h2>
            <p className="body text-mute">{challenge}</p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section py-16 border-t border-white/10">
          <div className="max-w-3xl space-y-6">
            <h2 className="h2 text-ink">Our approach</h2>
            <ul className="space-y-3">
              {approach.map((item, index) => (
                <li key={index} className="body text-mute">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Product Highlights */}
        <section className="section py-16 border-t border-white/10">
          <div className="max-w-4xl space-y-12">
            <h2 className="h2 text-ink">Product highlights</h2>
            {highlights.map((highlight, index) => (
              <div key={index} className="space-y-4 animate-fadeUp">
                {highlight.image && (
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[var(--bg-card)] shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      width={1200}
                      height={600}
                      loading="lazy"
                      className="w-full h-auto object-cover case-study-image"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className="h4 text-ink">{highlight.title}</h3>
                  <p className="body-muted">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="section py-16 border-t border-white/10">
          <div className="max-w-3xl space-y-6">
            <h2 className="h2 text-ink">Outcomes</h2>
            <ul className="space-y-3">
              {outcomes.map((outcome, index) => (
                <li key={index} className="body text-mute">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reflection */}
        <section className="section py-16 border-t border-white/10">
          <div className="max-w-3xl space-y-4">
            <h2 className="h2 text-ink">Closing thoughts</h2>
            <p className="body text-mute">{reflection}</p>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="section py-16 border-t border-white/10">
          <div className="max-w-3xl space-y-6">
            <h2 className="h2 text-ink">
              {nextProjectTitle || "Ready to build something remarkable?"}
            </h2>
            {nextProjectSummary && (
              <p className="body-muted">{nextProjectSummary}</p>
            )}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/#cta"
                className="button-text bg-accent text-white px-8 h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:brightness-110"
              >
                Start a Project
              </Link>
              <Link
                href="/#work"
                className="button-text px-8 h-12 rounded-full border border-white/25 text-ink flex items-center justify-center transition-colors duration-300 hover:border-white/40 hover:text-ink"
              >
                Back to Work
              </Link>
              <Link
                href="/#services"
                className="body-muted text-sm inline-block hover:text-ink transition-colors"
              >
                View our services →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

