import type { Metadata } from 'next';
import { Noto_Sans_JP, Zen_Maru_Gothic, Fira_Code } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans'
});

const zenMaru = Zen_Maru_Gothic({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-display'
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-a7432f80.vercel.app'),
  title: {
    default: 'MEXT Lab | Learn Japanese with Purpose',
    template: '%s | MEXT Lab'
  },
  description:
    'Comprehensive Japanese learning platform tailored for MEXT scholarship candidates. Structured curriculum, resources, and study planning tools to help you thrive in Japan.',
  keywords: [
    'Japanese study',
    'MEXT scholarship',
    'JLPT prep',
    'Study in Japan',
    'language learning'
  ],
  authors: [{ name: 'MEXT Lab' }],
  openGraph: {
    title: 'MEXT Lab | Learn Japanese with Purpose',
    description:
      'Guided Japanese learning journey crafted for MEXT scholars. Explore modules, immersion tips, and cultural insights.',
    url: 'https://agentic-a7432f80.vercel.app',
    siteName: 'MEXT Lab',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEXT Lab | Learn Japanese with Purpose',
    description:
      'Guided Japanese learning journey crafted for MEXT scholars. Explore modules, immersion tips, and cultural insights.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${zenMaru.variable} ${firaCode.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
