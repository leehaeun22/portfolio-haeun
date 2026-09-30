import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '이하은 | 홍익대학교 포트폴리오',
  description:
    '홍익대학교 이하은의 개인 포트폴리오입니다. 창의적인 아이디어와 열정으로 가득 찬 대학생의 이야기를 담았습니다.',
  keywords: ['이하은', '홍익대학교', '포트폴리오', 'Haeun Lee', 'Hongik University'],
  authors: [{ name: '이하은' }],
  openGraph: {
    title: '이하은 | 홍익대학교 포트폴리오',
    description: '홍익대학교 이하은의 개인 포트폴리오',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
