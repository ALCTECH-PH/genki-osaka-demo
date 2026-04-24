# げんき大阪 — フロント静的プレビュー

Phase 6 成果物。ブラウザで確認可能な静的 HTML/CSS/JS プレビューです。

## ローカルでの起動方法

```bash
# 方法 1: Python 3 (推奨)
cd output/frontend-preview
python3 -m http.server 8080
# → http://localhost:8080

# 方法 2: Node.js
npx serve output/frontend-preview

# 方法 3: プロジェクトルートのスクリプト
bash scripts/serve_preview.sh
```

## ファイル構成

```
frontend-preview/
├── index.html              # TOPページ
├── about.html              # 会社概要
├── contact.html            # お問い合わせ
├── thanks.html             # 送信完了
├── 404.html                # 404エラー
├── news/
│   ├── index.html          # お知らせ一覧
│   └── sample-article.html # 記事詳細（サンプル）
├── cases/                  # 導入事例（Phase 7 追加予定）
├── services/               # 事業紹介（Phase 7 追加予定）
└── assets/
    ├── css/
    │   ├── tokens.css      # デザイントークン（Phase 4 確定値）
    │   ├── base.css        # リセット・レイアウト・ナビ・フッター
    │   └── components.css  # ボタン・カード・フォーム・Hero等
    ├── js/
    │   ├── hamburger.js    # モバイルナビゲーション
    │   ├── accordion.js    # FAQ アコーディオン
    │   ├── scroll-anim.js  # スクロールアニメーション
    │   ├── counter-anim.js # 数値カウントアップ
    │   └── form-validate.js # フォームバリデーション
    └── images/
        └── (画像はPhase 7で配置)
```

## Phase 7 レビューチェックリスト

### デザイン確認
- [ ] Hero キャッチコピー「働く場所と、生きる場所を、共に創る。」の視認性
- [ ] カラーパレット（Primary #C96A1B / Accent #E8820A / BG #FAF8F3）の印象
- [ ] フォント（M PLUS Rounded 1c / BIZ UDPGothic）の読みやすさ
- [ ] ベントーグリッドのサービスカード配置バランス
- [ ] 代表メッセージセクションのレイアウト

### インタラクション確認
- [ ] ハンバーガーメニュー（900px 以下で表示）
- [ ] FAQ アコーディオン開閉
- [ ] 数値カウントアップアニメーション（スタッツバー）
- [ ] スクロールフェードイン（[data-anim] 要素）
- [ ] お問い合わせフォームバリデーション（必須チェック・メール形式）
- [ ] フォーム送信 → thanks.html リダイレクト

### レスポンシブ確認
- [ ] 480px（iPhone SE）
- [ ] 768px（iPad）
- [ ] 1280px（Desktop）

### アクセシビリティ確認
- [ ] フォーカスリングが全インタラクティブ要素に表示される
- [ ] aria-label / aria-current / aria-expanded が正しく設定されている
- [ ] `prefers-reduced-motion` でアニメーションが無効化される

## TEMPLATE-PART マーカー

Phase 8 での WordPress テンプレート変換に使用するマーカー一覧：

| マーカー名 | 対応テンプレートパーツ |
|---|---|
| `header` | `template-parts/global/header.php` |
| `footer` | `template-parts/global/footer.php` |
| `hero` | `template-parts/home/hero.php` |
| `stats-bar` | `template-parts/home/stats-bar.php` |
| `problem` | `template-parts/home/problem.php` |
| `services-bento` | `template-parts/home/services-bento.php` |
| `rep-message` | `template-parts/home/rep-message.php` |
| `cases-preview` | `template-parts/home/cases-preview.php` |
| `news-preview` | `template-parts/home/news-preview.php` |
| `cta-section` | `template-parts/global/cta-section.php` |
| `page-hero` | `template-parts/global/page-hero.php` |
| `contact-form` | `template-parts/contact/form.php` |
| `news-list` | `template-parts/news/list.php` |
| `article` | `template-parts/news/article.php` |
| `company-info` | `template-parts/about/company-info.php` |
| `thanks` | `template-parts/contact/thanks.php` |
| `404` | `404.php` |
