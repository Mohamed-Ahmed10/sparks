import Header from "@/layout/Header";
import { sora } from "@/lib/fonts";
import "./globals.css";


export const metadata = {
  title: "Sparks studios",
  description: "TEST : this is a sparks description",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={sora.className}>
      <body>
        <Header>This is content</Header>
        {children}
      </body>
    </html>
  );
}
