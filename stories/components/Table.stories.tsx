import { Table } from "@ginga-ui/core";

import type { Meta, StoryObj } from "@storybook/react";

interface FileData {
  name: string;
  type: string;
  modifiedDate: string;
  size: string;
}

const sampleData: FileData[] = [
  {
    name: "Games",
    type: "File folder",
    modifiedDate: "6/7/2020",
    size: "894 KB",
  },
  {
    name: "Program Files",
    type: "File folder",
    modifiedDate: "4/7/2021",
    size: "1.2 GB",
  },
  {
    name: "bootmgr",
    type: "System file",
    modifiedDate: "11/20/2010",
    size: "56 KB",
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
    header: "Date Modified",
    accessor: (row: FileData) => row.modifiedDate,
  },
  {
    key: "size",
    header: "Size",
    accessor: (row: FileData) => row.size,
  },
];

const meta: Meta<typeof Table> = {
  title: "Display/Table",
  component: Table,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table<FileData>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: columns,
    "aria-label": "Files",
  },
};

export const WithSelection: Story = {
  args: {
    data: sampleData,
    columns: columns,
    selectionMode: "multiple",
    "aria-label": "Files with selection",
  },
};
