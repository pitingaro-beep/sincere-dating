import { getAllArticles } from "@/lib/articles";
import { Suspense } from "react";
import ArticlesClient from "./ArticlesClient";

export const metadata = {
  title: "記事一覧 | 誠実な出会いナビ",
  description:
    "マッチングアプリの安全な使い方、既婚男性の見抜き方、Omiaiの活用術など役立つ情報を掲載しています。",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-400">読み込み中...</div>}>
      <ArticlesClient articles={articles} />
    </Suspense>
  );
}
