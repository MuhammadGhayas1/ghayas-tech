import Link from "next/link";

const services = [
  {
    title: "Website Design",
    copy:
      "Ghayas Tech designs minimal, user-focused websites that communicate clearly, feel effortless to use, and remain timeless over years of growth.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <rect x="2" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1.25" />
        <rect x="10" y="2" width="6" height="6" stroke="currentColor" strokeWidth="1.25" />
        <rect x="2" y="10" width="6" height="6" stroke="currentColor" strokeWidth="1.25" />
        <rect x="10" y="10" width="6" height="6" stroke="currentColor" strokeWidth="1.25" />
      </svg>
    )
  },
  {
    title: "Website Development",
    copy:
      "Ghayas Tech builds fast, scalable, and maintainable websites using clean, performance-first code that loads quickly and scales with your business.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <path d="M5 4L3 6L5 8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 4L15 6L13 8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="9" y1="3" x2="9" y2="9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: "Performance Optimization",
    copy:
      "Ghayas Tech optimizes websites for speed, responsiveness, and smooth performance across all devices and network conditions, ensuring fast load times and excellent user experience.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <path d="M3 9L7 5L11 9L15 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "UI/UX Engineering",
    copy:
      "Ghayas Tech engineers interfaces that feel natural, predictable, and easy to use by reducing friction and cognitive load, creating smooth user journeys.",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <circle cx="5" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="13" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="5" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="13" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.25" />
        <line x1="6.5" y1="5" x2="11.5" y2="5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <line x1="5" y1="6.5" x2="5" y2="11.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <line x1="13" y1="6.5" x2="13" y2="11.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <line x1="6.5" y1="13" x2="11.5" y2="13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    )
  }
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="page-grid space-y-10">
        <div className="flex items-center justify-between gap-6">
          <h2 className="h2 text-ink">What we do</h2>
          <span className="text-sm text-mute hidden md:block">
            Minimal, intentional services
          </span>
        </div>
        <div className="sr-only">
          <h3>What does Ghayas Tech specialize in?</h3>
          <p>
            Ghayas Tech specializes in designing and developing high-performance websites that feel effortless to use, load instantly, and scale long-term. Our work combines minimal design with performance-first engineering.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card shadow-none ${
                index === 0
                  ? "apple-fade-in"
                  : index === 1
                  ? "apple-fade-in-delay-1"
                  : index === 2
                  ? "apple-fade-in-delay-2"
                  : "apple-fade-in-delay-3"
              }`}
            >
              <div className="flex items-center gap-3 mb-3 group">
                <span className="text-mute group-hover:text-ink transition-colors duration-300 hidden sm:block">
                  {service.icon}
                </span>
                <h3 className="h4">{service.title}</h3>
              </div>
              <p className="body-muted">{service.copy}</p>
              {service.title === "Website Design" && (
                <Link
                  href="/#work"
                  className="body-muted text-sm mt-3 inline-block hover:text-ink transition-colors"
                >
                  View our work →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

