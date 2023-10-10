import DoctolibStick from "@/components/DoctolibStick";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import NewNavbarMobile from "@/components/NewNavbarMobile";
import type { Metadata } from "next";
import { Prata } from "next/font/google";
import "./globals.css";

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-prata",
});

export const metadata: Metadata = {
  title: "Chloé Bailly - Diététicienne & Coach Pilates à Lille",
  description:
    "Découvrez les services professionnels de Chloé Bailly, diététicienne nutritionniste et coach de Pilates à Lille. Transformez votre santé et votre bien-être grâce à des conseils nutritionnels personnalisés et des cours de Pilates adaptés à vos besoins. Réservez dès maintenant sur Doctolib.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${prata.variable} w-screen overflow-x-hidden`}>
        <header className="fixed w-full h-[100px] top-0 z-50 mb-[100px]">
          <Navbar />
          <NewNavbarMobile />
          <DoctolibStick />
        </header>

        {children}
        <Footer />
      </body>
    </html>
  );
}
