import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Omodei Labs — Conectando tecnologia ao seu negócio',
  description:
    'A Omodei Labs desenvolve software sob medida para empresas que buscam escala, eficiência e impacto por meio da tecnologia.',
  metadataBase: new URL('https://omodeilabs.com.br'),
  openGraph: {
    title: 'Omodei Labs',
    description:
      'A Omodei Labs desenvolve software sob medida para empresas que buscam escala, eficiência e impacto por meio da tecnologia.',
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
      <body className='antialiased'>{children}</body>
    </html>
  );
}
