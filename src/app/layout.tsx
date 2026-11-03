import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "All County Construction Services | Bathroom Remodeling & Commercial Construction",
    template: "%s | All County Construction Services",
  },
  description:
    "All County Construction Services, Inc. delivers bathroom remodeling, commercial construction, and government/secure facility projects across Central Florida. Licensed & insured.",
  openGraph: {
    title: "All County Construction Services",
    description:
      "Bathroom remodeling, commercial construction, and government/secure facility projects across Central Florida.",
    url: BUSINESS.url,
    siteName: "All County Construction Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneDisplay,
    email: BUSINESS.email,
    areaServed: BUSINESS.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressRegion: BUSINESS.addressRegion,
      addressCountry: "US",
    },
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
