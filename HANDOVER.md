# 誠実な出会いナビ 引き継ぎドキュメント
最終更新：2026-04-22 17:00

---

## プロジェクト概要

- **サイト名：** 誠実な出会いナビ
- **URL：** https://sincere-dating.jp
- **目的：** マッチングアプリ（Omiai・マリッシュ）のアフィリエイト収益化
- **ターゲット：** 20〜40代女性・婚活中・マッチングアプリ利用者
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
├── SNS運用プラン.md         # X投稿プラン・投稿文コピペ用
└── HANDOVER.md             # このファイル
```

---

## デプロイ

- **プラットフォーム：** Vercel
- **GitHub連携：** mainブランチにpushすると自動デプロイ
- **手順：** ファイル編集 → git add → git commit → git push origin main

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

## 記事一覧（2026-04-22時点）計30本

| # | スラグ | タイトル | 追加日 |
|---|---|---|---|
| 1 | married-men-lies-on-dating-apps | 既婚男性がよく使う嘘TOP5 | 初期 |
| 2 | how-to-find-sincere-men-on-omiai | Omiaiで誠実な男性を見抜く7つのポイント | 初期 |
| 3 | married-men-profile-photo-red-flags | プロフィール写真で分かる危険なサイン | 初期 |
| 4 | sincerity-checklist-for-first-date | 初デートで確認すべき誠実さのチェックリスト | 初期 |
| 5 | omiai-success-story | Omiai体験談：真剣な出会いができた理由 | 初期 |
| 6 | omiai-vs-marrish-comparison | OmiaiとMarrish比較 | 初期 |
| 7 | how-to-find-sincere-men-on-dating-apps | マッチングアプリで誠実な男性を見つける10のポイント | 初期 |
| 8 | dating-apps-married-men-ranking | 既婚男性が紛れ込みやすいアプリの特徴 | 初期 |
| 9 | married-men-line-message-patterns | 既婚男性のLINE・メッセージパターン図鑑 | 第2弾 |
| 10 | filtering-strategy-for-sincere-men | 誠実な男性だけと出会うフィルタリング戦略 | 第2弾 |
| 11 | recovery-roadmap-after-dating-married-man | 既婚男性と付き合ってしまった後の心理回復ロードマップ | 第2弾 |
| 12 | sincere-test-7-questions | 誠実さを測る「7つの質問」実験レポート | 第2弾 |
| 13 | marrish-married-men-how-to-spot | マリッシュに既婚男性はいる？見抜き方 | 第2弾 |
| 14 | married-men-sincerity-phrases | 既婚男性が使う"誠実アピール"フレーズ集 | 第3弾（4/22） |
| 15 | video-call-married-men-detection | ビデオ通話で既婚男性を見抜く方法 | 第3弾（4/22） |
| 16 | omiai-vs-pairs-safety-comparison | Omiai vs Pairs 安全性・真剣度比較 | 第3弾（4/22） |
| 17 | recovering-after-dating-married-man | 既婚男性と別れた後の気持ちの整理と立ち直り方 | 第3弾（4/22） |
| 18 | traits-of-people-who-married-via-dating-apps | マッチングアプリで本当に結婚できた人の共通点5つ | 第3弾（4/22） |
| 19 | omiai-profile-writing-guide | Omiaiのプロフィールを魅力的に書く方法 | 第4弾（4/22） |
| 20 | what-to-know-before-starting-dating-apps | マッチングアプリを始める前に知っておきたい5つのこと | 第4弾（4/22） |
| 21 | women-who-fall-for-married-men-traits | 既婚男性に引っかかりやすい女性の特徴と対策 | 第4弾（4/22） |
| 22 | omiai-fees-and-plans-2026 | Omiaiの料金・プラン徹底解説【2026年版】 | 第4弾（4/22） |
| 23 | marrish-fees-and-review-2026 | マリッシュの料金・評判・実際に使ってみた感想 | 第4弾（4/22） |
| 24 | weekend-unavailable-men-married-or-not | 「週末に会えない」男性は既婚者？確認すべき3つの質問 | 第5弾（4/22） |
| 25 | men-who-avoid-phone-calls | 電話を嫌がる男性の本当の理由 | 第5弾（4/22） |
| 26 | sudden-decrease-in-messages-red-flags | 急に連絡が減った…フェードアウトの兆候 | 第5弾（4/22） |
| 27 | burnout-from-konkatsu | 婚活疲れを感じたら読む記事 | 第5弾（4/22） |
| 28 | restart-dating-apps-after-heartbreak | 傷ついた後のマッチングアプリ再開ガイド | 第5弾（4/22） |
| 29 | with-vs-omiai-comparison | with（ウィズ）とOmiaiを比較 | 第5弾（4/22） |
| 30 | zexy-en-musubi-vs-omiai-comparison | ゼクシィ縁結びとOmiaiの違いを徹底比較 | 第5弾（4/22） |

---

## X（Twitter）アカウント

- **アカウント：** @sincere_dating
- **プロフィール：** 設定済み（桜アイコン・バナー・Bio・Website）
- **初投稿：** 2026-04-22 完了（記事3「プロフィール写真の見抜き方」）
- **投稿プラン：** `SNS運用プラン.md` 参照（4週間分 = 5/19まで）

### スケジュール済み自動投稿（Claude Scheduledタスクで管理）
| 日時 | 内容 | 状態 |
|---|---|---|
| 4/22 16:23 | 記事9「既婚男性のLINEパターン」 | ✅ 投稿済み（テスト実行で意図せず） |
| 4/23 7:30 | 記事1「既婚男性がよく使う嘘」 | ⏰ 予約済み |
| 4/23 21:30 | 記事3「プロフィール写真の危険なサイン」 | ⏰ 予約済み |

### 次回手動投稿が必要な日（4/24〜）
SNS運用プラン.mdのスケジュール表を参照して投稿するか、Scheduledタスクを追加作成してください。

---

## エージェント分担ルール

| 役割 | 内容 | ツール |
|---|---|---|
| **記事執筆エージェント** | `lib/articles.ts` に新記事を追加 | Glob/Read/Edit |
| **SNS運用エージェント** | X投稿・`SNS運用プラン.md`更新 | Chrome MCP |
| **サイト保守エージェント** | バナー追加・デザイン修正・Vercel確認 | Edit/Bash |
| **分析エージェント** | GA・GSC確認・流入レポート | Chrome MCP |

### 注意事項
- `lib/articles.ts` を編集する際は**必ず配列の末尾（`];` の直前）に追加**する
- 記事追加後は `git push origin main` でVercelに自動デプロイ
- TypeScriptのエラーに注意（特にimgタグの `border` は `style={{ border: 0 }}` で）

---

## 今後のタスク（優先順）

### 短期（〜1週間）
- [ ] afb審査結果確認 → Omiaiリンク差し替え（4箇所）
- [ ] X毎日投稿継続（4/24以降をScheduledタスクに追加 or 手動投稿）
- [ ] GSCでsitemap確認（数日後）

### 中期（〜1ヶ月）
- [ ] 検索流入キーワード確認（GSC）して追加記事を計画
- [ ] アフィリエイト収益モニタリング（afb・A8ダッシュボード）
- [ ] X フォロワー数確認（目標：1ヶ月で100人）
- [ ] SNS運用プラン.mdに記事24〜30の投稿文を追加作成

### 長期（〜3ヶ月）
- [ ] 月間PV 1,000達成
- [ ] Omiai成果報酬1件達成
- [x] 記事数を30本に増やす ← **4/22達成済み**
- [ ] Pinterest・Instagramへの展開検討

---

## コード改善履歴（4/22実施済み）

### app/articles/[slug]/page.tsx の改善
- **関連記事をカテゴリベースに変更：** 同じカテゴリの記事を優先して表示
- **インラインリンク記法対応：** 記事本文内で `[テキスト](/articles/slug)` の記法でリンクを書けるように（`parseInline` 関数追加）

### X投稿のScheduledタスク運用
- Claude Codeの「予定済み」タブでタスクを管理
- **注意：「今すぐ実行」を押すと即時投稿されるので、ツール許可テスト目的では使わない**
- 新しいX投稿タスクを作成するときは `mcp__scheduled-tasks__create_scheduled_task` を使う
- `fireAt` にはJST形式で指定（例：`2026-04-24T12:00:00+09:00`）

---

## トラブルシューティング

| 問題 | 原因 | 対処法 |
|---|---|---|
| Vercelデプロイエラー | TypeScriptエラー | `PATH="/opt/homebrew/Cellar/node/25.9.0_2/bin:$PATH" npm run build` でローカル確認 |
| 記事が表示されない | articles.ts の配列外に追加 | `];` の前に追加されているか確認 |
| sitemap.xmlが取得できない | デプロイ直後 | 数時間〜1日待つ |
| X投稿が文字数オーバー | URLは23文字換算、絵文字は2文字 | 本文を短くする |
| npmが見つからない | PATHが通っていない | `PATH="/opt/homebrew/Cellar/node/25.9.0_2/bin:$PATH"` を先頭につける |

---

*このドキュメントは新しいセッション開始時に必ず読んでください。*
