import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import LenisProvider from "@/components/LenisProvider";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Jung2un.dev",
  description: "프로젝트 기록",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body>
        <ThemeProvider>
          <LenisProvider>
            <Header />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
