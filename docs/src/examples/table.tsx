"use client";

import { Table } from "@ginga-ui/core";

type FileData = {
  name: string;
  type: string;
  modifiedDate: string;
  size: string;
};

const sampleData: FileData[] = [
  {
    name: "ドキュメント",
    type: "フォルダ",
    modifiedDate: "2024/12/01",
    size: "1.2 GB",
  },
  {
    name: "画像",
    type: "フォルダ",
    modifiedDate: "2024/11/28",
    size: "894 MB",
  },
  {
    name: "README.md",
    type: "Markdownファイル",
    modifiedDate: "2024/12/15",
    size: "4 KB",
  },
  {
    name: "package.json",
    type: "JSONファイル",
    modifiedDate: "2024/12/10",
    size: "2 KB",
  },
];

const columns = [
  {
    key: "name",
    header: "名前",
    accessor: (row: FileData) => row.name,
    isRowHeader: true,
  },
  {
    key: "type",
    header: "種類",
    accessor: (row: FileData) => row.type,
  },
  {
    key: "modifiedDate",
    header: "更新日",
    accessor: (row: FileData) => row.modifiedDate,
  },
  {
    key: "size",
    header: "サイズ",
    accessor: (row: FileData) => row.size,
  },
];

export function BasicExample() {
  return (
    <Table data={sampleData} columns={columns} aria-label="ファイル一覧" />
  );
}

export function WithSelectionExample() {
  return (
    <Table
      data={sampleData}
      columns={columns}
      selectionMode="multiple"
      aria-label="選択可能なファイル一覧"
      onSelectionChange={(keys) => console.log("選択:", keys)}
    />
  );
}

type UserData = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const userData: UserData[] = [
  { id: 1, name: "山田太郎", email: "yamada@example.com", role: "管理者" },
  { id: 2, name: "佐藤花子", email: "sato@example.com", role: "編集者" },
  { id: 3, name: "鈴木一郎", email: "suzuki@example.com", role: "閲覧者" },
];

const userColumns = [
  {
    key: "name",
    header: "名前",
    accessor: (row: UserData) => row.name,
    isRowHeader: true,
  },
  {
    key: "email",
    header: "メールアドレス",
    accessor: (row: UserData) => row.email,
  },
  {
    key: "role",
    header: "権限",
    accessor: (row: UserData) => row.role,
  },
];

export function UserTableExample() {
  return (
    <Table data={userData} columns={userColumns} aria-label="ユーザー一覧" />
  );
}

export function EmptyStateExample() {
  return <Table data={[]} columns={columns} aria-label="空のテーブル" />;
}
