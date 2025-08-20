import { gasoek, sora, space } from "@/lib/fonts";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Sparks studios",
  description: "TEST : this is a sparks description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <h1 className={`${gasoek.className} text-4xl`}>
          Hello with Gasoek One
        </h1>
        <p className={`${sora.className} text-lg`}>
          This paragraph uses Sora font
        </p>
        <span className={space.className}>
          Space Grotesk font applied
        </span>
      </body>
    </html>
  );
}
