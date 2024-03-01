import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import "./globals.css";
import { Poppins, Advent_Pro, Capriola, Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });


import Layout from "@/components/Layout/Layout";

const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
});
const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-advent-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nitinmaurya.vercel.app/"),

  title: {
    template: "%s | Nitin Maurya",
    default: "Nitin Maurya",
  },
  authors: {
    name: "Nitin Maurya",
  },

  description:
    "Nitin Maurya is a Computer Teacher and Basic Computer Instructor (Teacher) at the Education Department Rajasthan. He is a versatile full-stack developer, weaving digital wonders from both frontend and backend realms. Embracing innovation, he crafts captivating online experiences with precision and passion.",
  openGraph: {
    title: "Nitin Maurya",
    description:
      "Nitin Maurya is a Computer Teacher and Basic Computer Instructor (Teacher) at the Education Department Rajasthan. He is a versatile full-stack developer, weaving digital wonders from both frontend and backend realms. Embracing innovation, he crafts captivating online experiences with precision and passion.",
    url: "https://nitinmaurya.vercel.app/",
    siteName: "Nitin Maurya",
    images: "/og.png",
    type: "website",
  },
  keywords: [
    "Nitin Maurya Computer",
    "Nitin Maurya Pratapgarh",
    "nitinmaurya.vercel.app",
    "Nitin Maurya",
    "Computer Teacher",
    "Basic Computer Instructor",
    "Education Department Rajasthan",
  ],
};  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className} ${capriola.variable} ${adventPro.variable} overflow-x-hidden leading-6 antialiased`}
      >
        <Layout>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </Layout>
      </body>
    </html>
  );
}
