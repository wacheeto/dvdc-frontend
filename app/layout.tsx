import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { DM_Sans, Playfair_Display } from "next/font/google";
import AOSProvider from './components/AOSProvider';

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-white flex font-sans flex-col items-center text-black ${dmSans.variable} ${playfair.variable}`}>
        <div className="w-full sticky top-0 z-100">
          <Navbar />
        </div>
        <AOSProvider>
          <main className="flex-1 container  bg-white">
            {children}
          </main>
        </AOSProvider>
        <Footer/>
      </body>
    </html>
  );
}
