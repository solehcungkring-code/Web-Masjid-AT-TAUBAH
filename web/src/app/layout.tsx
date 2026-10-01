import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "Masjid Digital App",
  description: "Platform Operasional dan Komunikasi Masjid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={jakarta.className}>
        <div className="app-container">
          {/* Main content view */}
          <main className="main-content">
            {children}
          </main>
          
          {/* TODO: Bottom Navigation Bar for Mobile */}
        </div>
      </body>
    </html>
  );
}
