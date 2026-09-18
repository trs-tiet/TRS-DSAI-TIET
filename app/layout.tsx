import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import { SpeedInsights } from "@vercel/speed-insights/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tiet-trs.vercel.app"),
  title: `${site.eventName} — ${site.eventTitle}`,
  description:
    "A 2-day international workshop on robotics and AI hosted by The Robotics Society at TIET, Patiala — bringing together researchers, industry experts, and students.",
  openGraph: {
    title: `${site.eventName} — ${site.eventTitle}`,
    description:
      "Robotics and AI in Healthcare, Defence, and Rescue — 30-31 October 2026, TIET Patiala.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.eventName} — ${site.eventTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.eventName} — ${site.eventTitle}`,
    description:
      "Robotics and AI in Healthcare, Defence, and Rescue — 30-31 October 2026, TIET Patiala.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* Applies a stored dark-mode choice before paint, so returning
            visitors don't see a light-mode flash. No stored value = light
            (the default), per design. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
