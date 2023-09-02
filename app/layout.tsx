import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/dom/Layout'
import { siteConfig } from '@/config/site'
import { Newsletter } from '@/components/newsletter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },  
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  description: siteConfig.description,
  keywords: [
    "Joris Delorme",
    "Creative Developer"
  ],
  authors: [
    {
      name: "Joris Delorme",
      url: siteConfig.url,
    },
  ],
  creator: "Joris Delorme",
  themeColor: [
		{ color: "#000000" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@joris_delorme_",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} min-h-screen`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
