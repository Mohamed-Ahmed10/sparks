import DirectionContextProvider from "@/contexts/DirectionContextProvider";
import Header from "@/layout/Header";
import type { Metadata } from 'next';
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import "./globals.css";
export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Sparks studios',
    description: "test description",
    icons: {
      icon: '/logo.png',
    },
  };
}
export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {

  const locale = (await cookies()).get('lang')?.value || 'en';

  return (
    <DirectionContextProvider dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <html lang={locale === 'en' ? 'en' : 'ar'} suppressHydrationWarning dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <body>
          <NextIntlClientProvider>
            <Header></Header>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </DirectionContextProvider>
  );
}
