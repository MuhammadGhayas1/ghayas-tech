import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseStudy } from "@/components/CaseStudy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-performance website for a modern brand — Ghayas Tech",
  description:
    "A high-performance website designed and built for speed, clarity, and long-term scalability. Case study by Ghayas Tech."
};

// Prefer static generation on Cloudflare Pages
export const dynamic = "force-static";

export default function HighPerformanceBrand() {
  return (
    <>
      <Header />
      <CaseStudy
        title="High-performance website for a modern brand"
        summary="Designed and built for speed, clarity, and long-term scalability."
        role="Design & Development"
        focus="Performance, UX clarity"
        status="Concept Project"
        challenge="The brand needed a website that felt effortless to use while handling modern performance expectations. The existing experience lacked clarity, loaded slowly, and did not scale well across devices. The goal was simple: remove friction without removing character."
        approach={[
          "Clear information hierarchy",
          "Minimal interface decisions",
          "Performance-first architecture",
          "Thoughtful spacing and typography"
        ]}
        highlights={[
          {
            title: "Homepage experience",
            description: "Designed to surface the most important information immediately, without overwhelming the user.",
            image: "/siteuicard1.jpg"
          },
          {
            title: "Component system",
            description: "A modular structure that scales cleanly across pages and screen sizes."
          },
          {
            title: "Performance optimization",
            description: "Lean assets, optimized rendering, and fast initial load times."
          }
        ]}
        outcomes={[
          "Faster perceived load time",
          "Clearer user focus",
          "Reduced visual noise",
          "A foundation built to scale"
        ]}
        reflection="Good performance is invisible when done right. This project was about restraint — removing what wasn't needed so what remained could work better."
      />
      <Footer />
    </>
  );
}

