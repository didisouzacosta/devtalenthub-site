import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import Header from './components/header'
import Footer from './components/footer'
import { getAllLanguages, getAllLevels } from './api/job-api'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const languages = getAllLanguages()
  const levels = getAllLevels()

  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6518499187853251" crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Header languages={languages} levels={levels} />
        {children}
        <Footer languages={languages} levels={levels} />
        <Analytics />
      </body>
    </html>
  )
}
