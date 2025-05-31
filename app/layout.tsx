import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";

// Font files can be colocated inside of `pages`
const myFont = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Viet Cyclo Nottingham - Food, Drinks and Art",
  openGraph: {
    siteName: "Viet Cyclo Nottingham - Food, Drinks and Art",
    type: "website",
    locale: "en_US",
  },
  keywords: [
    "Nottingham play",
    "Nottingham meat",
    "castle lunch",
    "lunch deal",
    "meal deal",
    "Nottingham coffee",
    "city center coffee",
    "specialty coffee",
    "local coffee",
    "tea break",
    "local tea shop",
    "bubble tea",
    "nottingham bubble tea",
    "must try nottingham",
    "asian restaurant",
    "asian coffee",
    "vietnamese coffee",
    "souvenir",
    "nott play",
    "nott guide",
    "what's on nottingham",
    "nottingham nightlife",
    "night coffee",
    "coffee open late",
    "coffee opens late",
    "study coffee",
    "free wifi coffee",
    "lgbt+ coffee",
    "quiet coffee",
    "high chair coffee",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  description: "Eat, Sip, Work & Play",
  manifest: "/metadata/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/metadata/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/metadata/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/metadata/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/metadata/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={myFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
