import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Walentynki',
  description: 'Prosta strona z zapytaniem czy pójdziesz ze mna na walentynki',
  authors: [{ name: 'Igor Kłusek' }],
  publisher: 'Igor Kłusek',
  keywords: ['Walentynki', 'Miłość', 'Zapytanie', 'gify', 'misie'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
