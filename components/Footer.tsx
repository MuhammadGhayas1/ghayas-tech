import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--bg-secondary)]">
      <div className="page-grid py-12 md:py-16 flex flex-col md:flex-row gap-10 md:gap-0 md:items-center justify-between">
        <div className="space-y-2">
          <p className="subheading text-ink">Ghayas Tech</p>
          <p className="body-muted">Premium Website Design &amp; Development</p>
          <p className="body-muted text-sm">
            Based in North America. Serving startups and growing businesses worldwide.
          </p>
          <Link
            href="mailto:helloghayastech@gmail.com"
            className="body text-accent link-underline"
          >
            helloghayastech@gmail.com
          </Link>
        </div>
        <div className="flex items-center gap-6 text-sm text-mute">
          <Link href="#services" className="hover:text-ink transition-colors">
            Services
          </Link>
          <Link href="#work" className="hover:text-ink transition-colors">
            Work
          </Link>
          <Link href="#philosophy" className="hover:text-ink transition-colors">
            About
          </Link>
          <Link href="#cta" className="hover:text-ink transition-colors">
            Contact
          </Link>
        </div>
        <p className="small text-mute">© Ghayas Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}

