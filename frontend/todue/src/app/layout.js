'use client'
import './css/globals.css'
import { Inter } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
        <body className={inter.className}>{children}</body>
      </GoogleOAuthProvider>
    </html>
  )
}
