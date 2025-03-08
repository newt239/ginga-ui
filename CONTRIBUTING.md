# Contributerの方へ

## ローカルでの開発方法

## 必要なもの

- Node.js
- pnpm v10以上

## 開発の流れ

1. このリポジトリをクローン
2. ルートで`pnpm install`
3. `pnpm run build`でビルド
4. `pnpm run storybook`でStorybookで起動

変更を加え次第ビルドを行い、Storybookで確認してください。

## プルリクエストの作成

基本的には`feat/*`という形式でブランチを切り、変更を加えてください。

コミットメッセージの先頭には`feat`, `fix`, `docs`などのプレフィックスを付けてください。

## リポジトリの構成

本リポジトリではpnpm workspaceとTurporepoを使ったモノレポの構成になっています。

パッケージはコンポーネント単位で分割されており、`packages/components`にそれぞれのコンポーネントが格納されています。

## changesets

リリース管理には[changesets](https://github.com/changesets/changesets)を使用しています。PRを作る前にローカルで`npx changeset`を実行し、変更を加えたパッケージを選択してください。

その後変更内容が`major`, `minor`, `patch`のどれに該当するかを選択し、変更内容を簡単に記述し、コミットしてください。
