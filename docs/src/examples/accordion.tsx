import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Accordion defaultExpandedKeys={["item-1"]}>
      <AccordionItem id="item-1">
        <AccordionTrigger>返金ポリシーについて</AccordionTrigger>
        <AccordionContent>
          購入後90日以内であれば、理由を問わず全額返金いたします。お気軽にメールでご連絡ください。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger>利用開始方法</AccordionTrigger>
        <AccordionContent>
          ステップバイステップのガイドに従って、5分以内にセットアップ完了できます。技術的な知識は不要です。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionTrigger>技術サポートは提供されますか?</AccordionTrigger>
        <AccordionContent>
          はい、24時間365日メールとライブチャットでサポートを提供しています。通常2時間以内に返信いたします。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function MultipleExpansionExample() {
  return (
    <Accordion
      allowsMultipleExpanded
      defaultExpandedKeys={["item-1", "item-2"]}
    >
      <AccordionItem id="item-1">
        <AccordionTrigger>セクション1</AccordionTrigger>
        <AccordionContent>
          複数のセクションを同時に開くことができます。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger>セクション2</AccordionTrigger>
        <AccordionContent>
          複数のセクションを開いてみてください!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionTrigger>セクション3</AccordionTrigger>
        <AccordionContent>3つ目のセクションのコンテンツです。</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function DefaultClosedExample() {
  return (
    <Accordion>
      <AccordionItem id="faq-1">
        <AccordionTrigger>よくある質問1</AccordionTrigger>
        <AccordionContent>回答内容がここに表示されます。</AccordionContent>
      </AccordionItem>
      <AccordionItem id="faq-2">
        <AccordionTrigger>よくある質問2</AccordionTrigger>
        <AccordionContent>回答内容がここに表示されます。</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function ControlledExample() {
  return (
    <Accordion
      onExpandedChange={(keys) => console.log("展開中のアイテム:", keys)}
    >
      <AccordionItem id="item-1">
        <AccordionTrigger>アイテム1</AccordionTrigger>
        <AccordionContent>
          展開状態が変更されるとコンソールに出力されます。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger>アイテム2</AccordionTrigger>
        <AccordionContent>2つ目のコンテンツです。</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
