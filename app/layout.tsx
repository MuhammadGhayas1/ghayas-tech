import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghayas Tech — Premium Website Design & Development Studio",
  description:
    "Ghayas Tech is a premium website design and development studio building fast, minimalist, high-performance digital experiences for startups and modern businesses.",
  metadataBase: new URL("https://ghayas-tech.pages.dev"),
  alternates: {
    canonical: "https://ghayas-tech.pages.dev/"
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Ghayas Tech — Premium Website Design & Development Studio",
    description:
      "Premium website design & development focused on performance, clarity, and long-term value.",
    url: "https://ghayas-tech.pages.dev/",
    siteName: "Ghayas Tech",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 630,
        alt: "Ghayas Tech — Premium Web Design Studio"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghayas Tech — Premium Web Design Studio",
    description: "Fast, minimalist websites engineered for performance and clarity.",
    images: ["/icon.svg"]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ghayas Tech",
  url: "https://ghayas-tech.pages.dev",
  logo: "https://ghayas-tech.pages.dev/icon.svg",
  description:
    "Premium website design and development studio focused on performance, clarity, and timeless design.",
  sameAs: [
    "https://www.instagram.com/ghayastech",
    "https://www.youtube.com/@GhayasTech"
  ]
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

