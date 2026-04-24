import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | 誠実な出会いナビ`,
    description: article.excerpt,
    openGraph: article.image
      ? {
          images: [{ url: article.image, width: 1200, height: 630 }],
        }
      : undefined,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // インラインマークダウン（太字・ハイライト・リンク）を解析してReact要素に変換
  const parseInline = (text: string, keyPrefix: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|==[^=]+==#?|\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, j) => {
      // **太字**
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={`${keyPrefix}-${j}`} className="font-bold text-gray-800">
            {part.replace(/\*\*/g, "")}
          </strong>
        );
      }
      // ==ピンクマーカー==
      if (part.startsWith("==") && part.endsWith("==")) {
        return (
          <mark
            key={`${keyPrefix}-${j}`}
            className="bg-pink-100 text-pink-700 px-1 rounded font-medium"
            style={{ textDecoration: "none" }}
          >
            {part.replace(/==/g, "")}
          </mark>
        );
      }
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        const isInternal = href.startsWith("/");
        if (isInternal) {
          return (
            <Link
              key={`${keyPrefix}-${j}`}
              href={href}
              className="text-pink-500 underline hover:text-pink-600"
            >
              {label}
            </Link>
          );
        }
        return (
          <a
            key={`${keyPrefix}-${j}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 underline hover:text-pink-600"
          >
            {label}
          </a>
        );
      }
      return <span key={`${keyPrefix}-${j}`}>{part}</span>;
    });
  };

  // マークダウン的な見出し・段落をHTMLに変換（シンプル実装）
  const formatContent = (content: string) => {
    return content
      .split("\n\n")
      .map((block, i) => {
        // H1見出し
        if (block.startsWith("# ") && !block.startsWith("## ")) {
          return (
            <h1
              key={i}
              className="text-2xl font-bold text-gray-800 mt-8 mb-6"
            >
              {parseInline(block.replace(/^# /, ""), `h1-${i}`)}
            </h1>
          );
        }
        // H2見出し
        if (block.startsWith("## ") && !block.startsWith("### ")) {
          return (
            <h2
              key={i}
              className="text-xl font-bold text-gray-800 mt-10 mb-4 pb-2 border-b-2 border-pink-100"
            >
              {parseInline(block.replace(/^## /, ""), `h2-${i}`)}
            </h2>
          );
        }
        // H3見出し
        if (block.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="text-lg font-bold text-gray-700 mt-8 mb-3"
            >
              {parseInline(block.replace(/^### /, ""), `h3-${i}`)}
            </h3>
          );
        }
        // 水平線 ---
        if (block.trim() === "---") {
          return <hr key={i} className="my-8 border-pink-100" />;
        }
        if (block.startsWith("**") && block.endsWith("**")) {
          return (
            <p key={i} className="font-bold text-gray-800 mt-6 mb-2">
              {block.replace(/\*\*/g, "")}
            </p>
          );
        }
        // テーブル
        if (block.includes("|") && block.includes("---")) {
          const rows = block.split("\n").filter((l) => l.includes("|"));
          const headers = rows[0].split("|").filter((c) => c.trim());
          const dataRows = rows.slice(2);
          return (
            <div key={i} className="my-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-pink-50">
                    {headers.map((h, j) => (
                      <th key={j} className="border border-pink-100 px-3 py-2 text-left font-bold text-gray-700">
                        {h.trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataRows.map((row, j) => (
                    <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-pink-50/30"}>
                      {row.split("|").filter((c) => c.trim()).map((cell, k) => (
                        <td key={k} className="border border-pink-100 px-3 py-2 text-gray-600">
                          {parseInline(cell.trim(), `td-${i}-${j}-${k}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        // チェックリスト（- [ ]）
        if (block.includes("- [ ]")) {
          const items = block.split("\n").filter((l) => l.startsWith("- [ ]"));
          return (
            <ul key={i} className="my-4 space-y-2">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-gray-600">
                  <span className="mt-0.5 w-4 h-4 flex-shrink-0 border-2 border-pink-300 rounded inline-block" />
                  <span>{parseInline(item.replace("- [ ] ", ""), `cl-${i}-${j}`)}</span>
                </li>
              ))}
            </ul>
          );
        }
        // 箇条書き（- から始まる行）
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter((l) => l.startsWith("- "));
          return (
            <ul key={i} className="my-4 space-y-2 list-none pl-0">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-gray-600">
                  <span className="text-pink-400 mt-0.5">•</span>
                  <span>{parseInline(item.replace(/^- /, ""), `li-${i}-${j}`)}</span>
                </li>
              ))}
            </ul>
          );
        }
        // 番号付きリスト
        if (/^\d+\./.test(block)) {
          const items = block.split("\n").filter((l) => /^\d+\./.test(l));
          return (
            <ol key={i} className="my-4 space-y-2 list-decimal list-inside">
              {items.map((item, j) => (
                <li key={j} className="text-gray-600">
                  {parseInline(item.replace(/^\d+\.\s*/, ""), `ol-${i}-${j}`)}
                </li>
              ))}
            </ol>
          );
        }
        // 本文中の画像 ![alt](url)
        const imgMatch = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imgMatch) {
          const [, alt, src] = imgMatch;
          return (
            <div key={i} className="my-8 rounded-2xl overflow-hidden shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="w-full h-64 object-cover"
              />
            </div>
          );
        }
        // 強調テキスト・ハイライト・リンクのある通常段落
        if (block.includes("**") || block.includes("[") || block.includes("==")) {
          return (
            <p key={i} className="text-gray-600 leading-relaxed my-3">
              {parseInline(block, `p-${i}`)}
            </p>
          );
        }
        // 通常段落
        if (block.trim()) {
          return (
            <p key={i} className="text-gray-600 leading-relaxed my-3">
              {block}
            </p>
          );
        }
        return null;
      })
      .filter(Boolean);
  };

  const allArticles = getAllArticles();
  const sameCategory = allArticles.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  );
  const otherArticles = allArticles.filter(
    (a) => a.slug !== article.slug && a.category !== article.category
  );
  const relatedArticles = [...sameCategory, ...otherArticles].slice(0, 3);

  return (
    <div>
      {/* 記事ヘッダー */}
      <section
        style={{ background: "linear-gradient(135deg, #FDE8EE 0%, #fff0f5 100%)" }}
        className="py-12 px-4"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-pink-500 transition-colors">
              ホーム
            </Link>
            <span>›</span>
            <Link
              href="/articles"
              className="hover:text-pink-500 transition-colors"
            >
              記事一覧
            </Link>
            <span>›</span>
            <span className="text-gray-400 truncate max-w-xs">{article.title}</span>
          </div>
          <span className="inline-block text-xs text-pink-500 bg-white px-3 py-1 rounded-full mb-4 shadow-sm">
            {article.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-gray-500 text-sm">{article.date}</p>
        </div>
      </section>

      {/* アイキャッチ画像 */}
      {article.image && (
        <div className="w-full max-w-3xl mx-auto px-4 -mt-4 mb-0 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={420}
              className="w-full h-56 md:h-72 object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* 記事本文 */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-pink-50 p-6 md:p-10">
            {/* リード文 */}
            <div className="bg-pink-50 border-l-4 border-pink-300 rounded-r-xl p-4 mb-8">
              <p className="text-gray-600 leading-relaxed text-sm">{article.excerpt}</p>
            </div>
            {/* 本文 */}
            <div className="prose-sm max-w-none">
              {formatContent(article.content)}
            </div>
          </div>

          {/* Omiai バナー（記事内） */}
          <p className="text-right text-xs text-gray-400 mb-1">PR</p>
          <div
            className="rounded-2xl p-6 md:p-8 my-10 text-center shadow-sm"
            style={{
              background: "linear-gradient(135deg, #F8A4B8 0%, #E07090 100%)",
            }}
          >
            <p className="text-white font-bold text-lg mb-2">
              誠実な出会いを求めるなら Omiai
            </p>
            <p className="text-white text-sm opacity-90 mb-5">
              本人確認が厳しく、真剣な出会いを求める方が集まるアプリです。
              <br />
              女性は完全無料でご利用いただけます。
            </p>
            <a
              href="https://www.omiai-ibj.com/"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block bg-white hover:bg-gray-50 text-pink-500 font-bold py-3 px-8 rounded-full transition-colors shadow-md"
            >
              Omiaiを無料で始める →
            </a>
          </div>

          {/* marrish バナー（記事内） */}
          <p className="text-right text-xs text-gray-400 mb-1">PR</p>
          <div className="my-10 p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-pink-100 text-center">
            <p className="font-bold text-gray-800 text-lg mb-1">再婚・バツイチも歓迎</p>
            <p className="text-gray-500 text-sm mb-5">marrishは恋活・婚活・再婚活を応援するマッチングアプリです</p>
            <div className="flex justify-center mb-4">
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
            <a
              href="https://px.a8.net/svt/ejp?a8mat=4B1QDV+5O7P9U+3N2M+75EZ5"
              rel="nofollow sponsored"
              target="_blank"
              className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
            >
              marrishを無料で始める →
            </a>
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-12 px-4 bg-pink-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-8 text-center">
            関連記事
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/articles/${related.slug}`}
                className="block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-pink-50 overflow-hidden group"
              >
                <div
                  className="h-2 w-full"
                  style={{
                    background: "linear-gradient(90deg, #F8A4B8, #E07090)",
                  }}
                />
                <div className="p-4">
                  <span className="inline-block text-xs text-pink-500 bg-pink-50 px-2 py-1 rounded-full mb-2">
                    {related.category}
                  </span>
                  <h3 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-pink-500 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2">{related.date}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/articles"
              className="inline-block text-pink-500 hover:text-pink-600 font-medium border border-pink-300 px-8 py-3 rounded-full transition-colors"
            >
              すべての記事を見る →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
