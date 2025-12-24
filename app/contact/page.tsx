import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ghayas Tech",
  description:
    "Get in touch with Ghayas Tech to start your next website project. Currently accepting 1–2 new projects per month.",
  alternates: {
    canonical: "https://ghayas-tech.pages.dev/contact"
  }
};

export default function Contact() {
  return (
    <main className="bg-[var(--bg-primary)] text-ink">
      <Header />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}

