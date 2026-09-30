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
  title: '이하은 | Software Engineer Portfolio',
  description:
    'AI와 웹 기술을 활용해 실제 문제를 해결하는 이하은의 소프트웨어 개발 포트폴리오입니다.',
  keywords: ['이하은', '홍익대학교', '포트폴리오', 'AI', 'Software Engineer', 'Haeun Lee'],
  authors: [{ name: '이하은' }],
  openGraph: {
    title: '이하은 | Software Engineer Portfolio',
    description: 'AI와 웹 기술을 활용해 실제 문제를 해결하는 소프트웨어 개발 포트폴리오',
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
