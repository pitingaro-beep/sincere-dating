import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function Home() {
  const latestArticles = getAllArticles().slice(0, 3);

  return (
    <div>
      {/* ヒーローセクション */}
      <section
        style={{ background: "linear-gradient(135deg, #FDE8EE 0%, #fff0f5 50%, #ffffff 100%)" }}
        className="py-20 px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-pink-400 font-medium text-sm tracking-widest mb-4 uppercase">
            女性を守る・誠実な出会いガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            マッチングアプリで騙されないために。
            <br />
            <span className="text-pink-500">誠実な男性の見抜き方</span>、教えます。
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            実体験に基づいた情報で、あなたの大切な出会いを守ります。
            既婚男性の見抜き方から、安心して使えるアプリの選び方まで。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/articles"
              className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
            >
              記事を読む
            </Link>
            <a
              href="https://www.omiai-ibj.com/"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-white hover:bg-pink-50 text-pink-500 font-bold py-3 px-8 rounded-full border-2 border-pink-300 transition-colors shadow-sm"
            >
              Omiaiを試す
            </a>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            このサイトでできること
          </h2>
          <p className="text-center text-gray-500 mb-12 text-sm">
            3つのポイントで、あなたの出会いをサポートします
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ポイント1 */}
            <div className="text-center p-6 rounded-2xl bg-pink-50 border border-pink-100">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                ① 実体験に基づく情報
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                実際にマッチングアプリを使った経験者の視点から、リアルな情報をお届けします。理想論ではなく、現実に役立つ知識を。
              </p>
            </div>
            {/* ポイント2 */}
            <div className="text-center p-6 rounded-2xl bg-rose-50 border border-rose-100">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                ② 既婚男性の見抜き方
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                プロフィール写真、メッセージのパターン、デートの行動など、多角的な視点から危険なサインを解説します。
              </p>
            </div>
            {/* ポイント3 */}
            <div className="text-center p-6 rounded-2xl bg-fuchsia-50 border border-fuchsia-100">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                ③ 安全なOmiaiの使い方
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                真剣な出会いを求めるならOmiaiがおすすめ。安全に使うためのコツや、誠実な相手の見つけ方を徹底解説。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 新着記事セクション */}
      <section className="py-16 px-4" style={{ background: "#FDF7F9" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            新着記事
          </h2>
          <p className="text-center text-gray-500 mb-12 text-sm">
            最新の情報をお届けします
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-pink-50 overflow-hidden group"
              >
                <div
                  className="h-3 w-full"
                  style={{ background: "linear-gradient(90deg, #F8A4B8, #E07090)" }}
                />
                <div className="p-5">
                  <span className="inline-block text-xs text-pink-500 bg-pink-50 px-2 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-bold text-gray-800 text-base leading-snug mb-3 group-hover:text-pink-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <p className="text-xs text-gray-400 mt-4">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/articles"
              className="inline-block text-pink-500 hover:text-pink-600 font-medium border border-pink-300 hover:border-pink-400 px-8 py-3 rounded-full transition-colors"
            >
              記事一覧を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Omiai紹介バナー */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12 text-center shadow-md"
            style={{
              background: "linear-gradient(135deg, #F8A4B8 0%, #E07090 100%)",
            }}
          >
            <p className="text-white text-sm font-medium mb-2 opacity-90">
              PR・アフィリエイト
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              誠実な出会いを求めるなら
              <br />
              <span className="text-yellow-200">Omiai</span> がおすすめ
            </h2>
            <p className="text-white opacity-90 mb-8 leading-relaxed text-sm md:text-base">
              Omiaiは真剣な交際・結婚を求める方のためのマッチングアプリ。
              本人確認が厳しく、誠実なユーザーが多いと評判です。
              女性は無料で始められます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.omiai-ibj.com/"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-white hover:bg-gray-50 text-pink-500 font-bold py-4 px-10 rounded-full transition-colors shadow-md text-lg"
              >
                Omiaiを無料で始める →
              </a>
            </div>
            <p className="text-white text-xs mt-4 opacity-70">
              ※女性は完全無料でご利用いただけます
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
