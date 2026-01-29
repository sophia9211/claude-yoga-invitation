import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Serenity Yoga | Find Your Inner Peace',
    template: '%s | Serenity Yoga',
  },
  description:
    'Discover tranquility and balance at Serenity Yoga. Join our welcoming community for yoga classes suitable for all levels. Book your class today!',
  keywords: [
    'yoga',
    'yoga studio',
    'yoga classes',
    'meditation',
    'wellness',
    'mindfulness',
    'fitness',
    'health',
    'booking',
  ],
  authors: [{ name: 'Serenity Yoga' }],
  openGraph: {
    title: 'Serenity Yoga | Find Your Inner Peace',
    description:
      'Discover tranquility and balance at Serenity Yoga. Join our welcoming community for yoga classes suitable for all levels.',
    url: 'https://serenityyoga.com',
    siteName: 'Serenity Yoga',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-text antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
