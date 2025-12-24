import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Philosophy } from "@/components/Philosophy";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ghayas Tech",
  description:
    "Learn about Ghayas Tech's design philosophy, process, and approach to building high-performance websites that feel effortless.",
  alternates: {
    canonical: "https://ghayas-tech.pages.dev/about"
  }
};

export default function About() {
  return (
    <main className="bg-[var(--bg-primary)] text-ink">
      <Header />
      <Philosophy />
      <WhyUs />
      <Process />
      <Footer />
    </main>
  );
}

