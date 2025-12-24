import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudy } from "@/components/CaseStudy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product landing for an innovative startup — Ghayas Tech",
  description:
    "A focused landing experience designed for launch readiness. Case study by Ghayas Tech."
};

// Prefer static generation on Cloudflare Pages
export const dynamic = "force-static";

export default function InnovativeStartupLanding() {
  return (
    <>
      <Header />
      <CaseStudy
        title="Product landing for an innovative startup"
        summary="A focused landing experience designed for launch readiness."
        role="Product Design & Development"
        focus="Simplicity, performance, launch clarity"
        status="Concept Project"
        challenge="Early-stage products often try to say too much. The challenge was to create a landing experience that communicated value quickly, without overwhelming new users. The goal was clarity over completeness."
        approach={[
          "One clear message per section",
          "Calm visual rhythm",
          "Minimal interface decisions",
          "Performance optimized for first impressions"
        ]}
        highlights={[
          {
            title: "Hero messaging",
            description: "Clear value proposition presented without distraction.",
            image: "/siteuicard3.jpg"
          },
          {
            title: "Visual restraint",
            description: "Design choices that support the product, not overshadow it."
          },
          {
            title: "Launch readiness",
            description: "Built to scale as the product evolves."
          }
        ]}
        outcomes={[
          "Clearer first impression",
          "Reduced cognitive load",
          "Strong foundation for growth"
        ]}
        reflection="A good launch experience doesn't try to convince — it simply makes sense. That was the guiding principle here."
        nextProjectTitle="Let's build your product's first impression."
      />
      <Footer />
    </>
  );
}

