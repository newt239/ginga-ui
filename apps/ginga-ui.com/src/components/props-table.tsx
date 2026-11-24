"use client";

import { Table } from "@ginga-ui/core";
import styles from "./props-section.module.css";

type PropsTableRow = {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: string;
};

type PropsTableProps = {
  rows: PropsTableRow[];
  labels: {
    name: string;
    type: string;
    defaultValue: string;
    description: string;
    table: string;
  };
};

export function PropsTable({ rows, labels }: PropsTableProps) {
  return (
    <div className={styles.tableContainer}>
      <Table
        data={rows}
        getRowKey={(row) => `prop-${row.name}`}
        columns={[
          {
            key: "name",
            header: labels.name,
            accessor: (row) => <code>{row.name}</code>,
            isRowHeader: true,
          },
          {
            key: "type",
            header: labels.type,
            accessor: (row) => <code className={styles.type}>{row.type}</code>,
          },
          {
            key: "defaultValue",
            header: labels.defaultValue,
            accessor: (row) =>
              row.defaultValue ? <code>{row.defaultValue}</code> : "-",
          },
          {
            key: "description",
            header: labels.description,
            accessor: "description",
          },
        ]}
        striped
        aria-label={labels.table}
      />
    </div>
  );
}
