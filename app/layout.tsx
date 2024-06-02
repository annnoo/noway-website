import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { BackgroundPattern } from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noway4u - Around the World",
  description: "Noway4u erobert the Welt!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark flex min-h-screen w-full flex-col overflow-x-hidden">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </head>

      <body className={inter.className}>
        <header className=" sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10">
          <NavBar />
        </header>

        {/* <BackgroundPattern /> */}

        <div className="z-10 dark">
          {

            children

          }
        </div>
        <footer className="text-center text-xs">
          <div className="flex flex-col gap-4">
            <div className="z-10 flex flex-col gap-2 text-xs font-light">
              <div className="flex padding-4 flex-row justify-center gap-4 text-xs font-light">
                <a href="https://www.twitch.tv/noway4u_sir">
                  <span>Imprint</span>
                </a>
                <a href="https://noway.gg/privacy">
                  <span>Privacy</span>
                </a>
              </div>

              <div className="text-[12px]">
                Made with <span className="text-red-500">❤</span> by
                <a href="https://twitter.com/annnoo96"> Annnoo </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
