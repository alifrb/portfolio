// app/layout.tsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers"; // گام بعدی می‌سازیمش
import Header from "../../components/header";
import Footer from "../../components/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Front-End Developer – Ali",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg)] text-[var(--fg)]`}
      >
        <Providers>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
