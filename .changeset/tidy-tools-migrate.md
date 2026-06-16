---
"@ginga-ui/core": patch
"@ginga-ui/utils": patch
---

ビルドツールを tsup から tsdown（Rolldown ベース）へ移行しました。公開している exports（`.`、`./index.css`、`./variables.css`）は変更ありません。CSS は `@tsdown/css` により `dist/index.css` へ一括バンドルされます。
