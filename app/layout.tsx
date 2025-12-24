import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghayas Tech — Premium Website Design & Development Studio",
  description:
    "Ghayas Tech is a premium web design and development studio building fast, minimal, and conversion-focused websites for startups and growing businesses.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Ghayas Tech — Premium Website Design & Development Studio",
    description:
      "Ghayas Tech is a premium web design and development studio building fast, minimal, and conversion-focused websites.",
    type: "website"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ghayas Tech",
  url: "https://ghayastech.com",
  logo: "https://ghayastech.com/icon.svg",
  description:
    "Premium website design and development studio focused on high-performance, minimal, and conversion-driven digital experiences.",
  sameAs: []
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

