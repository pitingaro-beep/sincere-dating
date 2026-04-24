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

      {/* カテゴリーセクション */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            読みたいテーマから探す
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">
            カテゴリーを選んで、目的の記事をすぐに見つけよう
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                emoji: "🚩",
                label: "危険な男性の\n見抜き方",
                desc: "既婚男性・怪しいサインを見極める",
                color: "bg-rose-50 border-rose-100 hover:bg-rose-100",
                textColor: "text-rose-500",
                href: "/articles?category=%E5%8D%B1%E9%99%BA%E3%81%AA%E7%94%B7%E6%80%A7%E3%81%AE%E8%A6%8B%E6%8A%9C%E3%81%8D%E6%96%B9",
              },
              {
                emoji: "💡",
                label: "誠実な出会いの\nコツ",
                desc: "安全に素敵な恋愛をするヒント",
                color: "bg-yellow-50 border-yellow-100 hover:bg-yellow-100",
                textColor: "text-yellow-500",
                href: "/articles?category=%E8%AA%A0%E5%AE%9F%E3%81%AA%E5%87%BA%E4%BC%9A%E3%81%84%E3%81%AE%E3%82%B3%E3%83%84",
              },
              {
                emoji: "📱",
                label: "アプリ比較・\n選び方",
                desc: "Omiai・マリッシュなど徹底比較",
                color: "bg-blue-50 border-blue-100 hover:bg-blue-100",
                textColor: "text-blue-500",
                href: "/articles?category=%E3%82%A2%E3%83%97%E3%83%AA%E6%AF%94%E8%BC%83%E3%83%BB%E9%81%B8%E3%81%B3%E6%96%B9",
              },
              {
                emoji: "💕",
                label: "バツイチ・\n再婚活",
                desc: "もう一度幸せになりたい方へ",
                color: "bg-pink-50 border-pink-100 hover:bg-pink-100",
                textColor: "text-pink-500",
                href: "/articles?category=%E3%83%90%E3%83%84%E3%82%A4%E3%83%81%E3%83%BB%E5%86%8D%E5%A9%9A%E6%B4%BB",
              },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className={`flex flex-col items-center text-center p-5 rounded-2xl border transition-colors ${cat.color} group`}
              >
                <div className="text-4xl mb-3">{cat.emoji}</div>
                <h3 className={`text-sm font-bold ${cat.textColor} mb-2 whitespace-pre-line leading-snug`}>
                  {cat.label}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{cat.desc}</p>
                <span className={`mt-3 text-xs font-medium ${cat.textColor} group-hover:underline`}>
                  記事を見る →
                </span>
              </Link>
            ))}
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
          <p className="text-right text-xs text-gray-400 mb-1">PR</p>
          <div
            className="rounded-3xl p-8 md:p-12 text-center shadow-md"
            style={{
              background: "linear-gradient(135deg, #F8A4B8 0%, #E07090 100%)",
            }}
          >
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

      {/* marrish紹介バナー */}
      <section className="py-16 px-4" style={{ background: "#FDF7F9" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-right text-xs text-gray-400 mb-1">PR</p>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            再婚・バツイチも歓迎
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">
            marrishは恋活・婚活・再婚活を応援するマッチングアプリです
          </p>
          <div className="flex justify-center mb-6">
            <a
              href="https://px.a8.net/svt/ejp?a8mat=4B1QDV+5O7P9U+3N2M+75EZ5"
              rel="nofollow sponsored"
              target="_blank"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width={600}
                height={200}
                alt="恋活・婚活・再婚活マッチング【マリッシュ】"
                src="https://www25.a8.net/svt/bgt?aid=260421331343&wid=001&eno=01&mid=s00000016987001201000&mc=1"
                style={{ maxWidth: "100%", height: "auto", border: 0 }}
              />
            </a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width={1}
              height={1}
              src="https://www16.a8.net/0.gif?a8mat=4B1QDV+5O7P9U+3N2M+75EZ5"
              alt=""
              style={{ border: 0 }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-600">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-pink-50">
              <div className="text-2xl mb-2">💍</div>
              <p className="font-bold text-gray-800 mb-1">真剣な出会い</p>
              <p className="text-xs">婚活・再婚活に特化した真剣なユーザーが集まります</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-pink-50">
              <div className="text-2xl mb-2">👨‍👧</div>
              <p className="font-bold text-gray-800 mb-1">シンパパ・シンママ優遇</p>
              <p className="text-xs">子連れの方も安心して利用できる優遇プログラムあり</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-pink-50">
              <div className="text-2xl mb-2">✅</div>
              <p className="font-bold text-gray-800 mb-1">本人確認あり</p>
              <p className="text-xs">身分証確認で安心・安全な出会いをサポート</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://px.a8.net/svt/ejp?a8mat=4B1QDV+5O7P9U+3N2M+75EZ5"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 px-10 rounded-full transition-colors shadow-md text-lg"
            >
              marrishを無料で始める →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
