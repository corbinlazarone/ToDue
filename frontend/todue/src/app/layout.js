'use client'
import './css/globals.css'
import { Inter } from 'next/font/google'
import { GoogleOAuthProvider } from '@react-oauth/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId={"125984775541-023rp3fhq6n6gvngqp9ortsf58rsl5uu.apps.googleusercontent.com"}>
        <body className={inter.className}>{children}</body>
      </GoogleOAuthProvider>
    </html>
  )
}
