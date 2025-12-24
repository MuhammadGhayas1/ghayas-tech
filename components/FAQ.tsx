export function FAQ() {
  const faqs = [
    {
      question: "What does Ghayas Tech do?",
      answer:
        "Ghayas Tech designs and develops high-performance websites focused on clarity, usability, and long-term value."
    },
    {
      question: "How much do projects cost?",
      answer: "Projects typically start from $3,000, depending on scope and goals."
    },
    {
      question: "How long does a website take?",
      answer: "Most projects take 3–6 weeks from start to launch."
    },
    {
      question: "Who do you work with?",
      answer:
        "Founders, startups, and businesses that value quality over shortcuts."
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, ongoing optimization and maintenance are available for all projects."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className="section border-t border-white/10" id="faq">
      <div className="page-grid space-y-10">
        <h2 className="h2 text-ink">Frequently asked questions</h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="max-w-3xl space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-6 last:border-0"
            >
              <h3 className="h4 text-ink mb-2">{faq.question}</h3>
              <p className="body-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

