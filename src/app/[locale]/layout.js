import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

import Header from '../../shared_components/header'
import Footer from '../../shared_components/footer'
import { getAllLanguages, getAllLevels } from '@/api/job-api'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return [{locale: 'pt-br'}, {locale: 'en'}];
}

export default function RootLayout({ children, params: {locale} }) {
  const languages = getAllLanguages()
  const levels = getAllLevels()

  return (
    <html lang={locale}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6518499187853251" crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Header languages={languages} levels={levels} />
        {locale}
        {children}
        <Footer languages={languages} levels={levels} />
        <Analytics />
      </body>
    </html>
  )
}
