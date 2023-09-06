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
      <body className={inter.className}>
        <Header languages={languages} levels={levels} />
        {children}
        <Footer languages={languages} levels={levels} />
        <Analytics />
      </body>
    </html>
  )
}
