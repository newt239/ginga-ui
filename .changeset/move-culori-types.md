---
"@ginga-ui/core": patch
"@ginga-ui/utils": patch
---

`@ginga-ui/utils` の公開している型が culori の型を参照しているため、`@types/culori` を dependencies に含めるようにしました。利用側で `@types/culori` を入れなくても型チェックが通ります。

`Table` のセルにオブジェクトや配列を渡したとき、`[object Object]` ではなく JSON の文字列で表示するようにしました。`Date` は ISO 8601 形式で表示します。
