import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LABO-MOBIL | Przeglądy dróg i obiektów mostowych",
  description:
    "LABO-MOBIL wykonuje przeglądy dróg, obiektów mostowych, fotorejestrację pasa drogowego oraz mapy stanu technicznego nawierzchni.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#061113] text-white">
        {children}
      </body>
    </html>
  );
}