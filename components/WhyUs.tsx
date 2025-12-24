const points = [
  "Obsessive attention to detail",
  "Minimal, timeless design approach",
  "Performance-first engineering",
  "Clean, maintainable code",
  "Long-term thinking, not quick fixes"
];

export function WhyUs() {
  return (
    <section className="section border-t border-white/10 bg-[var(--bg-secondary)]" id="why">
      <div className="page-grid space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="h2 text-ink">Why choose Ghayas Tech</h2>
        </div>
        <div className="sr-only">
          <h3>Why should you choose Ghayas Tech for your website project?</h3>
          <p>
            Ghayas Tech combines obsessive attention to detail with minimal, timeless design and performance-first engineering. We deliver clean, maintainable code with long-term thinking, not quick fixes.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {points.map((point, index) => (
            <div
              key={point}
              className={`flex items-start gap-3 border border-white/10 rounded-2xl p-4 bg-[var(--bg-card)] shadow-[0_10px_24px_rgba(0,0,0,0.35)] ${
                index === 0
                  ? "apple-fade-in"
                  : index === 1
                  ? "apple-fade-in-delay-1"
                  : index === 2
                  ? "apple-fade-in-delay-2"
                  : index === 3
                  ? "apple-fade-in-delay-3"
                  : "apple-fade-in"
              }`}
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-ink" />
              <p className="body text-ink">{point}</p>
            </div>
          ))}
        </div>
        <p className="body-muted max-w-3xl">
          Everything we build is crafted with care — from the first pixel to the
          final deployment.
        </p>
      </div>
    </section>
  );
}

