const steps = [
  {
    title: "Discover",
    copy: "Understanding your brand, goals, and audience."
  },
  {
    title: "Design",
    copy: "Creating clean, focused interfaces with purpose."
  },
  {
    title: "Build",
    copy: "Engineering fast, scalable, production-ready solutions."
  },
  {
    title: "Refine",
    copy: "Polishing every detail until it feels right."
  },
  {
    title: "Launch",
    copy: "Delivering a website that works beautifully from day one."
  }
];

export function Process() {
  return (
    <section className="section" id="process">
      <div className="page-grid space-y-10">
        <h2 className="h2 text-ink">A simple, thoughtful process</h2>
        <div className="sr-only">
          <h3>What is Ghayas Tech's project process?</h3>
          <p>
            Ghayas Tech follows a five-step process: Discover (understanding brand and goals), Design (creating focused interfaces), Build (engineering scalable solutions), Refine (polishing details), and Launch (delivering production-ready websites).
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`card shadow-none hover:bg-[#15151a] border-white/10 ${
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
              <p className="small text-mute mb-2">0{index + 1}</p>
              <p className="h4 mb-2">{step.title}</p>
              <p className="body-muted">{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

