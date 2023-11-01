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
    category: 'technology',
    generator: 'Next.js',
    applicationName: 'DevTalentHub',
    referrer: 'origin-when-cross-origin',
    keywords: ['Mobile', 'iOS', 'Android', 'Jobs', 'Job', 'Proposals', 'Swift', 'React Native', 'Flutter', 'Junior', 'Pleno', 'Senior'],
    authors: [{ name: 'Adriano Souza Costa', url: 'https://github.com/didisouzacosta' }],
    creator: 'Adriano Souza Costa',
    publisher: 'Adriano Souza Costa',
    metadataBase: new URL('http://www.devtalenthub.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'pt-BR': '/pt-BR',
      },
    },
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
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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
