import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudy } from "@/components/CaseStudy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversion-focused experience for a B2B leader — Ghayas Tech",
  description:
    "A calm, structured B2B experience designed to guide confident decision-making. Case study by Ghayas Tech."
};

// Prefer static generation on Cloudflare Pages
export const dynamic = "force-static";

export default function B2BLeaderExperience() {
  return (
    <>
      <Header />
      <CaseStudy
        title="Conversion-focused experience for a B2B leader"
        summary="A calm, structured experience designed to guide confident decision-making."
        role="UX Strategy, Design, Development"
        focus="Conversion, clarity, trust"
        status="Concept Project"
        challenge="B2B users don't want to be impressed — they want to understand. The challenge was to create an experience that felt authoritative, clear, and credible without feeling heavy. The interface needed to guide action without pressure."
        approach={[
          "Strong visual hierarchy",
          "Clear content groupings",
          "Intentional pacing",
          "Reduced cognitive load"
        ]}
        highlights={[
          {
            title: "Information architecture",
            description: "Content structured to answer questions before users ask them.",
            image: "/siteuicard2.jpg"
          },
          {
            title: "Conversion paths",
            description: "Primary actions placed naturally within the flow of the page."
          },
          {
            title: "Design language",
            description: "Quiet, minimal, and consistent across the experience."
          }
        ]}
        outcomes={[
          "Improved clarity of key messages",
          "More confident user journeys",
          "Reduced friction toward conversion"
        ]}
        reflection="Conversion doesn't come from pressure. It comes from clarity, trust, and a sense of control. This project was built around that belief."
        nextProjectTitle="Let's design an experience your users trust."
      />
      <Footer />
    </>
  );
}

