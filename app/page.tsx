import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TrustedBy } from "@/components/TrustedBy";
import { WhyUs } from "@/components/WhyUs";
import { Work } from "@/components/Work";
import { ScrollFade } from "@/components/ScrollFade";

// Prefer static generation for Cloudflare Pages
export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="bg-[var(--bg-primary)] text-ink">
      <Header />
      <Hero />
      <ScrollFade>
        <Philosophy />
      </ScrollFade>
      <ScrollFade>
        <Services />
      </ScrollFade>
      <ScrollFade>
        <WhyUs />
      </ScrollFade>
      <ScrollFade>
        <Process />
      </ScrollFade>
      <ScrollFade>
        <Work />
      </ScrollFade>
      <ScrollFade>
        <Testimonials />
      </ScrollFade>
      <ScrollFade>
        <TrustedBy />
      </ScrollFade>
      <ScrollFade>
        <FAQ />
      </ScrollFade>
      <ScrollFade>
        <CTA />
      </ScrollFade>
      <Footer />
    </main>
  );
}

