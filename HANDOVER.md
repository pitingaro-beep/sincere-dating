# 誠実な出会いナビ 引き継ぎドキュメント
最終更新：2026-04-24 07:30

---

## プロジェクト概要

- **サイト名：** 誠実な出会いナビ
- **URL：** https://sincere-dating.jp
- **目的：** マッチングアプリ（Omiai・マリッシュ）のアフィリエイト収益化
- **ターゲット：** 20〜40代女性・婚活中・バツイチ・再婚活・マッチングアプリ利用者
- **技術スタック：** Next.js（App Router）・TypeScript・Tailwind CSS・Vercel

---

## ディレクトリ構成

```
/Users/hirokiwashio/sincere-dating/
├── app/
│   ├── layout.tsx          # ヘッダー・フッター・GA・GSC設定
│   ├── page.tsx            # トップページ
│   ├── sitemap.ts          # サイトマップ自動生成
│   ├── articles/
│   │   ├── page.tsx        # 記事一覧ページ
│   │   └── [slug]/
│   │       └── page.tsx    # 記事詳細ページ（affiliateバナー含む）
│   ├── about-omiai/        # Omiaiについてページ
│   └── profile/            # プロフィールページ
├── lib/
│   └── articles.ts         # 全記事データ（★ここに記事を追加する）
├── next.config.ts          # Unsplash画像ドメイン設定済み
├── SNS運用プラン.md         # X投稿プラン・投稿文コピペ用
└── HANDOVER.md             # このファイル
```

---

## デプロイ

- **プラットフォーム：** Vercel
- **GitHub連携：** mainブランチにpushすると自動デプロイ
- **手順：** ファイル編集 → `npm run build` でエラー確認 → git add → git commit → git push origin main
- **npmのPATH：** `export PATH="$PATH:/usr/local/bin:/opt/homebrew/bin"` を先頭につける

---

## アフィリエイト設定

| サービス | ASP | 状況 |
|---|---|---|
| Omiai | afb | **審査申請済み・結果待ち** → 承認後にafbのOmiaiリンクに差し替え |
| マリッシュ | A8.net | **稼働中** `a8mat=4B1QDV+5O7P9U+3N2M+75EZ5` |

### Omiaiアフィリエイトリンクの差し替え方法
afb審査通過後、以下のファイルの `https://www.omiai-ibj.com/` を afbのトラッキングURLに変更：
- `app/page.tsx`（2箇所）
- `app/articles/page.tsx`（バナー内）
- `app/articles/[slug]/page.tsx`（バナー内）

---

## 計測・分析ツール

| ツール | 状況 | 確認方法 |
|---|---|---|
| Google Analytics | **稼働中** `G-ZSRPK871DM` | analytics.google.com |
| Google Search Console | **設定済み** メタタグ認証 | search.google.com/search-console |
| sitemap.xml | **自動生成** `/sitemap.xml` | GSCでインデックス登録状況を確認 |

### GSCでの次回確認事項
- sitemap.xmlのステータス（数日後に「成功」になっているはず）
- 検索流入キーワードのモニタリング（1〜2週間後から始まる）

---

## 記事一覧（2026-04-23時点）計36本・47ページ

### 既婚男性・危険な見抜き方（10本）
| # | スラグ | タイトル |
|---|---|---|
| 1 | married-men-lies-on-dating-apps | 既婚男性がよく使う嘘TOP5 |
| 2 | profile-photo-danger-signs | プロフィール写真で分かる危険なサイン |
| 3 | married-men-line-message-patterns | 既婚男性のLINE・メッセージパターン図鑑 |
| 4 | married-men-sincere-appeal-phrases | 既婚男性が使う"誠実アピール"フレーズ集 |
| 5 | video-call-safety-check | ビデオ通話で既婚男性を見抜く方法 |
| 6 | dangerous-app-features | 既婚男性が紛れ込みやすいアプリの特徴 |
| 7 | marrish-married-men-check | マリッシュに既婚男性はいる？見抜き方 |
| 8 | susceptible-women-traits | 既婚男性に引っかかりやすい女性の特徴 |
| 9 | cant-meet-on-weekends | 週末に会えない男性は既婚者？ |
| 10 | men-who-avoid-phone-calls | 電話を嫌がる男性の本当の理由 |

### 誠実な出会いのコツ（12本）
| # | スラグ | タイトル |
|---|---|---|
| 11 | omiai-how-to-find-sincere-man | Omiaiで誠実な男性を見抜く7つのポイント |
| 12 | how-to-find-sincere-man | 誠実な男性を見つける10のポイント |
| 13 | first-date-safety-checklist | 初デート安全チェックリスト |
| 14 | seven-questions-sincerity-test | 誠実さを測る7つの質問 |
| 15 | filtering-strategy-safe-matching | 誠実な男性だけと出会うフィルタリング戦略 |
| 16 | before-starting-matching-app | マッチングアプリを始める前に知っておきたいこと |
| 17 | matching-app-marriage-success-traits | マッチングアプリで結婚できた人の共通点 |
| 18 | simultaneous-matching-how-to | 複数同時進行の誠実な進め方 |
| 19 | konkatsu-tiredness-recovery | 婚活疲れを感じたら読む記事 |
| 20 | sudden-contact-decrease-fadeout | 急に連絡が減った・フェードアウト対処法 |
| 21 | psychological-recovery-roadmap | 心理回復ロードマップ |
| 22 | after-married-man-recovery | 既婚男性と別れた後の立ち直り方 |

### バツイチ・再婚活（6本）← 4/23 新規追加
| # | スラグ | タイトル |
|---|---|---|
| 23 | batsuichi-women-matching-app-success | バツイチ女性がマッチングアプリで幸せになった方法 |
| 24 | batsuichi-men-appeal | バツイチ男性の魅力10選 |
| 25 | batsuichi-women-remarriage-guide | バツイチ女性が再婚を考えるときに読む記事 |
| 26 | marrish-batsuichi-matching | マリッシュでバツイチ同士が出会える理由 |
| 27 | single-mother-konkatsu-guide | 子連れバツイチ女性の婚活ガイド |
| 28 | batsuichi-love-again | バツイチになった私がもう一度恋愛を信じた理由 |

### アプリ比較・選び方（8本）
| # | スラグ | タイトル |
|---|---|---|
| 29 | omiai-vs-marrish-comparison | OmiaiとMarrish比較 |
| 30 | omiai-vs-pairs-safety-comparison | Omiai vs Pairs 安全性比較 |
| 31 | with-vs-omiai-comparison | withとOmiai比較 |
| 32 | zexy-en-vs-omiai-comparison | ゼクシィ縁結びとOmiai比較 |
| 33 | omiai-real-experience | Omiai体験談 |
| 34 | omiai-profile-writing-guide | Omiaiのプロフィール書き方ガイド |
| 35 | omiai-fees-and-plans-2026 | Omiaiの料金・プラン【2026年版】 |
| 36 | marrish-fees-and-reputation | マリッシュの料金・評判 |

---

## X（Twitter）アカウント

- **アカウント：** @sincere_dating
- **プロフィール：** 設定済み（桜アイコン・バナー・Bio・Website）

### 投稿済み（4/24時点）
| 日時 | 内容 | 状態 |
|---|---|---|
| 4/22 16:23 | 記事9「既婚男性のLINEパターン」 | ✅ 投稿済み |
| 4/23 7:32 | 記事1「既婚男性がよく使う嘘」 | ✅ 自動投稿済み |
| 4/23 21:30 | 記事3「プロフィール写真の危険なサイン」 | ✅ 自動投稿済み |

### X投稿の重要注意事項
- **「今すぐ実行」を押すと即時投稿される**（ツール許可テスト目的では押さない）
- 新しいX投稿タスクを作成するときは `mcp__scheduled-tasks__create_scheduled_task` を使う
- `fireAt` にはJST形式で指定（例：`2026-04-24T12:00:00+09:00`）

### スケジュール済みX投稿（4/24〜5/5）
| 日時 | 内容 | タスクID |
|---|---|---|
| 4/24 12:00 | 記事8 既婚男性が紛れ込みやすいアプリ | x-post-2026-04-24-1200 |
| 4/25 21:00 | 記事4 初デートチェックリスト | x-post-2026-04-25-2100 |
| 4/26 10:00 | 記事5 Omiai体験談 | x-post-2026-04-26-1000 |
| 4/26 21:30 | 記事12 誠実さを測る7つの質問 | x-post-2026-04-26-2130 |
| 4/27 12:00 | 記事7 誠実な男性10のポイント | x-post-2026-04-27-1200 |
| 4/28 21:00 | 記事2 Omiaiで見抜く | x-post-2026-04-28-2100 |
| 4/29 7:30 | 記事13 マリッシュに既婚男性は？ | x-post-2026-04-29-0730 |
| 4/29 21:30 | 記事11 心理回復ロードマップ | x-post-2026-04-29-2130 |
| 4/30 12:00 | 記事6 OmiaiとMarrish比較 | x-post-2026-04-30-1200 |
| 5/1 21:00 | 記事10 フィルタリング戦略 | x-post-2026-05-01-2100 |
| 5/2 7:30 | 記事1 再投稿 | x-post-2026-05-02-0730 |
| 5/2 21:30 | 記事4 再投稿 | x-post-2026-05-02-2130 |
| 5/3 10:00 | 記事9 再投稿 | x-post-2026-05-03-1000 |
| 5/4 12:00 | 記事3 再投稿 | x-post-2026-05-04-1200 |
| 5/4 21:00 | 記事12 再投稿 | x-post-2026-05-04-2100 |
| 5/5 21:30 | 記事2 再投稿 | x-post-2026-05-05-2130 |

---

## 4/23 実施した主な改善内容

### 記事ページのリッチ化
- **アイキャッチ画像対応：** `Article`型に`image?`フィールド追加、記事トップに表示
- **本文中画像対応：** `![alt](url)` 記法で記事内に画像挿入可能
- **蛍光マーカー対応：** `==テキスト==` でピンクハイライト表示
- **絵文字追加：** 既存23記事の見出し・重要箇所に170箇所以上の絵文字を追加
- **OGP画像対応：** `image`フィールドがあればOG画像として設定
- **Unsplashドメイン許可：** `next.config.ts` に設定済み

### 記事追加（4/23）
- 低競合キーワード狙い7本（週末・電話・フェードアウト・婚活疲れ・アプリ比較など）
- バツイチ・再婚活ターゲット6本（マリッシュへの自然な誘導込み）

---

## エージェント分担ルール

| 役割 | 内容 | ツール |
|---|---|---|
| **記事執筆エージェント** | `lib/articles.ts` に新記事を追加 | Glob/Read/Edit |
| **SNS運用エージェント** | X投稿・`SNS運用プラン.md`更新 | Chrome MCP |
| **サイト保守エージェント** | バナー追加・デザイン修正・Vercel確認 | Edit/Bash |
| **分析エージェント** | GA・GSC確認・流入レポート | Chrome MCP |

### 記事追加時の注意事項
- `lib/articles.ts` を編集する際は**必ず配列の末尾（`];` の直前）に追加**する
- 記事追加後は必ず `npm run build` でビルド確認してからpush
- 画像は Unsplash URL を使用（`https://images.unsplash.com/photo-{id}?w=1200&auto=format&fit=crop&q=80`）
- 本文中画像：`![説明文](URL)` で挿入
- 蛍光マーカー：`==テキスト==` で使用可能
- TypeScriptのエラーに注意（特にimgタグの `border` は `style={{ border: 0 }}` で）

---

## 今後のタスク（優先順）

### 短期（〜1週間）
- [ ] afb審査結果確認 → 承認メール待ち → Omiaiリンク差し替え（4箇所）
- [x] X投稿スケジュール作成（4/24〜5/5の16件）← 4/24完了
- [x] GSCでsitemap・インデックス状況確認 ← 4/24確認済み（45ページ検出・正常）
- [x] PR表記追加（景品表示法対応）← 4/24完了

### 中期（〜1ヶ月）
- [ ] 検索流入キーワード確認（GSC）して追加記事を計画
- [ ] アフィリエイト収益モニタリング（afb・A8ダッシュボード）
- [ ] X フォロワー数確認（目標：1ヶ月で100人）
- [ ] SNS運用プラン.mdにバツイチ向け投稿文を追加
- [ ] Pinterest・Instagramへの展開検討
- [ ] with・ゼクシィ縁結びのアフィリエイト申請検討

### 長期（〜3ヶ月）
- [ ] 月間PV 1,000達成
- [ ] Omiai成果報酬1件達成
- [ ] マリッシュ成果報酬1件達成
- [x] 記事数を30本に増やす ← **4/22達成済み**
- [x] 記事数を36本に増やす ← **4/23達成済み**

---

## トラブルシューティング

| 問題 | 原因 | 対処法 |
|---|---|---|
| Vercelデプロイエラー | TypeScriptエラー | `export PATH="$PATH:/usr/local/bin:/opt/homebrew/bin" && npm run build` でローカル確認 |
| 記事が表示されない | articles.ts の配列外に追加 | `];` の前に追加されているか確認 |
| sitemap.xmlが取得できない | デプロイ直後 | 数時間〜1日待つ |
| X投稿が文字数オーバー | URLは23文字換算、絵文字は2文字 | 本文を短くする |
| npmが見つからない | PATHが通っていない | `export PATH="$PATH:/usr/local/bin:/opt/homebrew/bin"` を先頭につける |
| 画像が表示されない | next.config.tsのドメイン未設定 | `images.unsplash.com` は設定済み。他のドメインは追加が必要 |

---

*このドキュメントは新しいセッション開始時に必ず読んでください。*
