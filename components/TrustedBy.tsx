"use client";

const companies = [
  "Northfield Studio",
  "Aurora Digital Co.",
  "Maple Ridge Interiors",
  "Westline Consulting",
  "Horizon Build Group",
  "Silver Oak Ventures",
  "Brightpath Solutions",
  "Redwood Systems",
  "Atlas Creative",
  "Clearview Technologies"
];

export function TrustedBy() {
  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="section border-t border-white/10 overflow-hidden" id="trusted-by">
      <div className="page-grid">
        <div className="space-y-8 w-full flex flex-col items-center">
          <p className="body text-mute uppercase tracking-wider text-center">Trusted by teams at</p>
          <div className="relative w-full">
            <div className="flex items-center gap-12 animate-scroll">
              {duplicatedCompanies.map((company, index) => (
                <span
                  key={`${company}-${index}`}
                  className="subheading text-mute whitespace-nowrap flex-shrink-0"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

