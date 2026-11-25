---
"@ginga-ui/utils": patch
---

`@ginga-ui/utils` の公開している型が culori の型を参照しているため、`@types/culori` を dependencies に含めるようにしました。利用側で `@types/culori` を入れなくても型チェックが通ります。
