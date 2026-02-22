import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ScrollProgress from '@/components/scroll-progress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Balasubramani | Senior .NET Backend Engineer',
  description:
    'Senior .NET Backend Engineer specializing in scalable RESTful APIs, JWT authentication, RBAC security, Azure cloud services, Docker deployments, and RPA automation.',
  keywords: [
    'Balasubramani',
    '.NET Developer',
    'Backend Engineer',
    'ASP.NET Core',
    'Azure',
    'C#',
    'REST API',
    'India',
  ],
  authors: [{ name: 'Balasubramani' }],
  creator: 'Balasubramani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://balasubramani.dev',
    title: 'Balasubramani | Senior .NET Backend Engineer',
    description:
      'Senior .NET Backend Engineer with 4+ years building scalable systems, secure APIs, and cloud-native solutions.',
    siteName: 'Balasubramani Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balasubramani | Senior .NET Backend Engineer',
    description: 'Senior .NET Backend Engineer — Azure, .NET, Docker, UiPath',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Balasubramani',
  jobTitle: 'Senior .NET Backend Engineer',
  description:
    'Senior .NET Backend Engineer specializing in scalable RESTful APIs, Azure cloud services, and enterprise automation.',
  url: 'https://balasubramani.dev',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  knowsAbout: ['ASP.NET Core', 'Azure', 'Docker', 'JWT', 'C#', 'SQL Server', 'UiPath'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
