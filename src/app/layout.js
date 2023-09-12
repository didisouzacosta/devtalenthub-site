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
        <script async src="https://fundingchoicesmessages.google.com/i/pub-6518499187853251?ers=1" nonce="lUbhwNYVI1QgkEEUh1G9Qg"></script><script nonce="lUbhwNYVI1QgkEEUh1G9Qg">(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script>
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
