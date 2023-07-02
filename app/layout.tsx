import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wasim Ullah",
  description: "Digital Marketing Professional",
  openGraph: {
    title: "Wasim Ullah",
    description: "Digital Marketing Professional",
    url: "https://wasim.co",
    siteName: "Wasim Ullah",
  },
  twitter: {
    card: "summary_large_image",
    site: "@wasimxullah",
    creator: "@wasimxullah",
  },
  themeColor: "transparent",
  metadataBase: new URL("https://wasim.co"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
