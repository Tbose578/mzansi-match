import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mzansi Match - Mobile-Friendly Web App',
  description: 'A mobile-friendly web app for matching built with Next.js, TypeScript, Supabase, and Paystack. Download or install as PWA.',
  keywords: ['matching app', 'web app', 'PWA', 'mobile app', 'Mzansi Match'],
  authors: [{ name: 'Tbose578' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mzansi-match.vercel.app',
    title: 'Mzansi Match - Mobile-Friendly Web App',
    description: 'A mobile-friendly web app for matching built with Next.js, TypeScript, Supabase, and Paystack. Download or install as PWA.',
    images: [
      {
        url: 'https://mzansi-match.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mzansi Match',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mzansi Match - Mobile-Friendly Web App',
    description: 'A mobile-friendly web app for matching built with Next.js, TypeScript, Supabase, and Paystack. Download or install as PWA.',
    images: ['https://mzansi-match.vercel.app/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://mzansi-match.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
