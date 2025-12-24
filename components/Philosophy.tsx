export function Philosophy() {
  return (
    <section className="section" id="philosophy">
      <div className="page-grid grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start">
        <div className="space-y-4">
          <h2 className="h2 text-ink">Designed with intention. Built to last.</h2>
          <div className="sr-only">
            <h3>What is Ghayas Tech's design philosophy?</h3>
            <p>
              Ghayas Tech believes great websites should feel invisible, fast, and clear. Every decision is guided by simplicity, usability, and long-term value rather than trends.
            </p>
          </div>
          <p className="body-muted">
            At Ghayas Tech, we believe great websites should feel invisible.
            Fast. Clear. Thoughtfully designed. Every decision we make is guided
            by simplicity, usability, and long-term value.
          </p>
          <p className="body-muted">
            We don't chase trends. We focus on what works — beautifully.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Simplicity over complexity",
            "Quality over quantity",
            "Purpose over trends",
            "Craft over shortcuts"
          ].map((item, index) => (
            <div
              key={item}
              className={`card shadow-none hover:shadow-none hover:bg-[#15151a] border-white/10 ${
                index === 0
                  ? "apple-fade-in"
                  : index === 1
                  ? "apple-fade-in-delay-1"
                  : index === 2
                  ? "apple-fade-in-delay-2"
                  : "apple-fade-in-delay-3"
              }`}
            >
              <p className="h4">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

