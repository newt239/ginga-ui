import { List, ListItem } from "@ginga-ui/core";

export function UnorderedExample() {
  return (
    <List type="unordered">
      <ListItem>リストアイテム1</ListItem>
      <ListItem>リストアイテム2</ListItem>
      <ListItem>リストアイテム3</ListItem>
    </List>
  );
}

export function OrderedExample() {
  return (
    <List type="ordered">
      <ListItem>最初のステップ</ListItem>
      <ListItem>2番目のステップ</ListItem>
      <ListItem>最後のステップ</ListItem>
    </List>
  );
}

export function NestedExample() {
  return (
    <List type="unordered">
      <ListItem>親アイテム1</ListItem>
      <ListItem>
        親アイテム2
        <List type="unordered">
          <ListItem>ネストされたアイテム1</ListItem>
          <ListItem>ネストされたアイテム2</ListItem>
        </List>
      </ListItem>
      <ListItem>親アイテム3</ListItem>
    </List>
  );
}

export function MixedExample() {
  return (
    <List type="ordered">
      <ListItem>タスク管理システムの要件定義</ListItem>
      <ListItem>
        UI/UXデザイン
        <List type="unordered">
          <ListItem>ワイヤーフレーム作成</ListItem>
          <ListItem>デザインモックアップ</ListItem>
          <ListItem>ユーザビリティテスト</ListItem>
        </List>
      </ListItem>
      <ListItem>開発とテスト</ListItem>
      <ListItem>デプロイメント</ListItem>
    </List>
  );
}
