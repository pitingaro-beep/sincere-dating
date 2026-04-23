"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import type { Article } from "@/lib/articles";

const CATEGORIES = [
  { label: "すべて", value: "", emoji: "📚" },
  { label: "危険な男性の見抜き方", value: "危険な男性の見抜き方", emoji: "🚩" },
  { label: "誠実な出会いのコツ", value: "誠実な出会いのコツ", emoji: "💡" },
  { label: "アプリ比較・選び方", value: "アプリ比較・選び方", emoji: "📱" },
  { label: "バツイチ・再婚活", value: "バツイチ・再婚活", emoji: "💕" },
];

export default function ArticlesClient({ articles }: { articles: Article[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selected = searchParams.get("category") ?? "";
  const [query, setQuery] = useState("");

  const handleCategory = (value: string) => {
    setQuery("");
    const params = new URLSearchParams();
    if (value) params.set("category", value);
    router.push(`/articles${value ? `?${params.toString()}` : ""}`);
  };

  const filtered = articles.filter((a) => {
    const matchCategory = selected ? a.category === selected : true;
    const q = query.trim().toLowerCase();
    const matchQuery = q
      ? a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
      : true;
    return matchCategory && matchQuery;
  });

  return (
    <div>
      {/* ページヘッダー */}
      <section
        style={{ background: "linear-gradient(135deg, #FDE8EE 0%, #fff0f5 100%)" }}
        className="py-12 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">記事一覧</h1>
          <p className="text-gray-500 mb-8">
            マッチングアプリで安全に素敵な出会いをするための情報をお届けします
          </p>
          {/* 検索バー */}
          <div className="max-w-xl mx-auto relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="キーワードで記事を検索…"
              className="w-full pl-11 pr-10 py-3 rounded-full border border-pink-200 bg-white shadow-sm text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* カテゴリータブ */}
      <section className="sticky top-0 z-20 bg-white border-b border-pink-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategory(cat.value)}
                className={`flex-shrink-0 flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selected === cat.value
                    ? "bg-pink-400 text-white shadow-sm"
                    : "bg-pink-50 text-gray-600 hover:bg-pink-100"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
                <span
                  className={`ml-1 text-xs rounded-full px-1.5 py-0.5 ${
                    selected === cat.value
                      ? "bg-white/30 text-white"
                      : "bg-pink-200 text-pink-600"
                  }`}
                >
                  {cat.value
                    ? articles.filter((a) => a.category === cat.value).length
                    : articles.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 記事グリッド */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* 検索結果件数 */}
          {(query || selected) && (
            <p className="text-sm text-gray-500 mb-6">
              {query && <span>「<span className="text-pink-500 font-medium">{query}</span>」の検索結果：</span>}
              <span className="font-medium text-gray-700">{filtered.length}件</span>
            </p>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-gray-500">該当する記事が見つかりませんでした</p>
              <button
                onClick={() => { setQuery(""); handleCategory(""); }}
                className="mt-4 text-pink-500 text-sm underline"
              >
                すべての記事を見る
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-pink-50 overflow-hidden group"
                >
                  {article.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div
                      className="h-3 w-full"
                      style={{ background: "linear-gradient(90deg, #F8A4B8, #E07090)" }}
                    />
                  )}
                  <div className="p-5">
                    <span className="inline-block text-xs text-pink-500 bg-pink-50 px-2 py-1 rounded-full mb-3">
                      {article.category}
                    </span>
                    <h2 className="font-bold text-gray-800 text-base leading-snug mb-3 group-hover:text-pink-500 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
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
          )}
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
