import Link from "next/link";

export function CTA() {
  return (
    <section className="section" id="cta">
      <div className="page-grid border border-white/10 rounded-3xl bg-[var(--bg-card)] p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
        <div className="space-y-3 max-w-2xl">
          <h2 className="h2 text-ink">Let's build something remarkable.</h2>
          <p className="body-muted">
            If you're ready to invest in quality, we're ready to build.
          </p>
          <p className="body-muted text-sm mt-2">
            Currently accepting 1–2 new projects per month.
          </p>
        </div>
        <Link
          href="mailto:hello@ghayastech.com"
          className="button-text bg-accent text-white px-8 h-12 rounded-full flex items-center justify-center transition-colors duration-300 hover:brightness-110"
        >
          Start a Project
        </Link>
      </div>
    </section>
  );
}

