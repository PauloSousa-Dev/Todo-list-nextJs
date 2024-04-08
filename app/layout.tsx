import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans`}>
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-800 to-indigo-900 p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
