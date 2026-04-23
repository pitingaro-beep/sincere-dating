import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: "記事一覧 | 誠実な出会いナビ",
  description:
    "マッチングアプリの安全な使い方、既婚男性の見抜き方、Omiaiの活用術など役立つ情報を掲載しています。",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div>
      {/* ページヘッダー */}
      <section
        style={{ background: "linear-gradient(135deg, #FDE8EE 0%, #fff0f5 100%)" }}
        className="py-12 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">記事一覧</h1>
          <p className="text-gray-500">
            マッチングアプリで安全に素敵な出会いをするための情報をお届けします
          </p>
        </div>
      </section>

      {/* 記事グリッド */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-pink-50 overflow-hidden group"
              >
                <div
                  className="h-3 w-full"
                  style={{
                    background: "linear-gradient(90deg, #F8A4B8, #E07090)",
                  }}
                />
                <div className="p-5">
                  <span className="inline-block text-xs text-pink-500 bg-pink-50 px-2 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h2 className="font-bold text-gray-800 text-base leading-snug mb-3 group-hover:text-pink-500 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xs text-gray-400">{article.date}</p>
                    <span className="text-xs text-pink-400 font-medium group-hover:underline">
                      続きを読む →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Omiai バナー */}
      <section className="py-12 px-4 bg-pink-50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            真剣な出会いを探しているなら
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Omiaiは本人確認厳しく安心。女性は無料でご利用いただけます。
          </p>
          <a
            href="https://www.omiai-ibj.com/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
          >
            Omiaiを無料で始める →
          </a>
        </div>
      </section>

      {/* marrish バナー */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">再婚・バツイチも歓迎</h3>
          <p className="text-gray-500 text-sm mb-6">marrishは恋活・婚活・再婚活を応援するマッチングアプリです</p>
          <div className="flex justify-center mb-5">
            <a
              href="https://px.a8.net/svt/ejp?a8mat=4B1QDV+5O7P9U+3N2M+75EZ5"
              rel="nofollow"
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
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4B1QDV+5O7P9U+3N2M+75EZ5"
            rel="nofollow"
            target="_blank"
            className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
          >
            marrishを無料で始める →
          </a>
        </div>
      </section>
    </div>
  );
}
