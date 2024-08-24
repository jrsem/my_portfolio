import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from '@/components/Navbar'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Junior Semerzier",
  description: "Full-stack web and mobile developer",
  icons: {
    icon: '/computer.png'
  }
};
const locales=['en','fr','pt','es']

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  if(!locales.includes(locale)){
    notFound()
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
         <Navbar/>
        <main className="relative overflow-hidden min-h-full flex items-center justify-center pb-2">
          {children}
        </main>
      </NextIntlClientProvider>
        </body>
    </html>
  );
}
