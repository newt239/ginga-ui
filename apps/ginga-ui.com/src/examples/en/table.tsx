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
    name: "Documents",
    type: "Folder",
    modifiedDate: "Dec 1, 2024",
    size: "1.2 GB",
  },
  {
    name: "Images",
    type: "Folder",
    modifiedDate: "Nov 28, 2024",
    size: "894 MB",
  },
  {
    name: "README.md",
    type: "Markdown file",
    modifiedDate: "Dec 15, 2024",
    size: "4 KB",
  },
  {
    name: "package.json",
    type: "JSON file",
    modifiedDate: "Dec 10, 2024",
    size: "2 KB",
  },
];

const columns = [
  {
    key: "name",
    header: "Name",
    accessor: (row: FileData) => row.name,
    isRowHeader: true,
  },
  {
    key: "type",
    header: "Type",
    accessor: (row: FileData) => row.type,
  },
  {
    key: "modifiedDate",
    header: "Modified",
    accessor: (row: FileData) => row.modifiedDate,
  },
  {
    key: "size",
    header: "Size",
    accessor: (row: FileData) => row.size,
  },
];

export function BasicExample() {
  return <Table data={sampleData} columns={columns} aria-label="File list" />;
}

export function StripedExample() {
  return (
    <Table
      data={sampleData}
      columns={columns}
      striped
      aria-label="Striped file list"
    />
  );
}

export function WithSelectionExample() {
  return (
    <Table
      data={sampleData}
      columns={columns}
      selectionMode="multiple"
      aria-label="Selectable file list"
      onSelectionChange={(keys) => console.log("Selected:", keys)}
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
  { id: 1, name: "John Smith", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Emily Johnson", email: "emily@example.com", role: "Editor" },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "Viewer",
  },
];

const userColumns = [
  {
    key: "name",
    header: "Name",
    accessor: (row: UserData) => row.name,
    isRowHeader: true,
  },
  {
    key: "email",
    header: "Email address",
    accessor: (row: UserData) => row.email,
  },
  {
    key: "role",
    header: "Role",
    accessor: (row: UserData) => row.role,
  },
];

export function UserTableExample() {
  return <Table data={userData} columns={userColumns} aria-label="User list" />;
}

export function EmptyStateExample() {
  return (
    <Table
      data={[]}
      columns={columns}
      emptyMessage="No files yet"
      aria-label="Empty table"
    />
  );
}
