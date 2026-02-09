import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Verde Forma — Onde o verde vira forma e o espaço ganha vida',
  description:
    'A Verde Forma é a união entre design, tecnologia e natureza, criando formas que conectam pessoas e ambientes em harmonia com o natural.',
  metadataBase: new URL('https://verdeforma.com.br'),
  openGraph: {
    title: 'Verde Forma',
    description:
      'A Verde Forma é a união entre design, tecnologia e natureza, criando formas que conectam pessoas e ambientes em harmonia com o natural.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
