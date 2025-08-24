import Header from "@/layout/Header";
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
    <html lang="en">
      <body>
        <Header>This is content</Header>
        {children}
      </body>
    </html>
  );
}
