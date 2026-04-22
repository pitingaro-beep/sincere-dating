import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "誠実な出会いナビ | マッチングアプリで安全に素敵な恋愛を",
  description:
    "女性を守る誠実な出会いガイド。既婚男性の見抜き方、Omiaiの安全な使い方など実体験に基づく情報をお届けします。",
  verification: {
    google: "5LUAa2upcdJ_u0EJYdfl5MoDKev5-OcOha9_-dxbSkI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZSRPK871DM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZSRPK871DM');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-700">
        {/* ヘッダー */}
        <header className="bg-white border-b border-pink-100 shadow-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🌸</span>
              <span className="text-xl font-bold text-pink-500 tracking-tight">
                誠実な出会いナビ
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-pink-500 transition-colors">
                ホーム
              </Link>
              <Link
                href="/articles"
                className="hover:text-pink-500 transition-colors"
              >
                記事一覧
              </Link>
              <Link
                href="/about-omiai"
                className="hover:text-pink-500 transition-colors"
              >
                Omiaiについて
              </Link>
              <Link
                href="/profile"
                className="hover:text-pink-500 transition-colors"
              >
                プロフィール
              </Link>
            </nav>
            {/* モバイルナビ */}
            <nav className="flex md:hidden items-center gap-4 text-xs font-medium text-gray-600">
              <Link href="/" className="hover:text-pink-500 transition-colors">
                ホーム
              </Link>
              <Link
                href="/articles"
                className="hover:text-pink-500 transition-colors"
              >
                記事
              </Link>
              <Link
                href="/about-omiai"
                className="hover:text-pink-500 transition-colors"
              >
                Omiai
              </Link>
            </nav>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="flex-1">{children}</main>

        {/* フッター */}
        <footer className="bg-pink-50 border-t border-pink-100 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl">🌸</span>
                <span className="text-lg font-bold text-pink-500">
                  誠実な出会いナビ
                </span>
              </div>
              <nav className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
                <Link href="/" className="hover:text-pink-500 transition-colors">
                  ホーム
                </Link>
                <Link
                  href="/articles"
                  className="hover:text-pink-500 transition-colors"
                >
                  記事一覧
                </Link>
                <Link
                  href="/about-omiai"
                  className="hover:text-pink-500 transition-colors"
                >
                  Omiaiについて
                </Link>
                <Link
                  href="/profile"
                  className="hover:text-pink-500 transition-colors"
                >
                  プロフィール
                </Link>
              </nav>
            </div>
            <p className="text-center text-xs text-gray-400 mt-8">
              © 2026 誠実な出会いナビ. All rights reserved.
            </p>
            <p className="text-center text-xs text-gray-400 mt-2">
              ※当サイトはOmiai・marrish（マリッシュ）のアフィリエイトプログラムに参加しています。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
