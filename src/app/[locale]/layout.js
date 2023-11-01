import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import Header from '../../shared-components/header'
import Footer from '../../shared-components/footer'

export async function generateMetadata({ params: { locale } }) {
  const title = 'DevTalentHub'
  const description = 'DevTalentHub: Your gateway to mobile app opportunities. Discover innovative projects, connect with talent, and shape the future of mobile development.'

  return {
    title,
    description,
    openGraph: {
        title,
        description,
        url: 'http://www.devtalenthub.com',
        siteName: title,
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
            }
        ],
        locale,
        type: 'website'
    }
  }
}

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return [
    { locale: 'pt-BR' },
    { locale: 'en' }
  ]
}

export default async function RootLayout({ children, params: { locale } }) {
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
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
