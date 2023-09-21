import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import Header from '../../shared_components/header'
import Footer from '../../shared_components/footer'
import { getAllLanguages, getAllLevels } from '@/api/job-api'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return [
    { locale: 'pt-BR' },
    { locale: 'en' }
  ];
}

export default async function RootLayout({ children, params: { locale } }) {
  const languages = getAllLanguages()
  const levels = getAllLevels()

  let messages;

  try {
    messages = (await import(`@/internacionalization/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6518499187853251" crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header languages={languages} levels={levels} />
          {children}
          <Footer languages={languages} levels={levels} />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
