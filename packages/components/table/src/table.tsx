"use client";

import { useState } from "react";

import { Checkbox } from "@ginga-ui/checkbox";
import { cn } from "@ginga-ui/utils";
import {
  Cell as AriaCell,
  Column as AriaColumn,
  Row as AriaRow,
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
} from "react-aria-components";

import styles from "./table.module.css";

export interface TableColumn<T> {
  key: string;
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  isRowHeader?: boolean;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  className?: string;
  showHeader?: boolean;
  selectionMode?: "none" | "single" | "multiple";
  onSelectionChange?: (selectedRows: T[]) => void;
  "aria-label": string;
}

export const Table = <T extends object>({
  data,
  columns,
  className,
  showHeader = true,
  selectionMode = "none",
  onSelectionChange,
  "aria-label": ariaLabel,
}: TableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const handleSelectionChange = (index: number) => {
    const newSelection = new Set(selectedRows);
    if (selectionMode === "single") {
      if (selectedRows.has(index)) {
        newSelection.clear();
      } else {
        newSelection.clear();
        newSelection.add(index);
      }
    } else {
      if (selectedRows.has(index)) {
        newSelection.delete(index);
      } else {
        newSelection.add(index);
      }
    }
    setSelectedRows(newSelection);
    onSelectionChange?.(Array.from(newSelection).map((i) => data[i]));
  };

  const handleHeaderCheckboxChange = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    } else {
      const allIndexes = new Set(data.map((_, index) => index));
      setSelectedRows(allIndexes);
      onSelectionChange?.(data);
    }
  };

  const renderCell = (row: T, column: TableColumn<T>) => {
    const value =
      typeof column.accessor === "function"
        ? column.accessor(row)
        : row[column.accessor];
    return value as React.ReactNode;
  };

  return (
    <AriaTable
      className={cn(styles.table, className)}
      aria-label={ariaLabel}
      selectionMode={selectionMode}
    >
      {showHeader && (
        <AriaTableHeader className={styles["table-header"]}>
          {selectionMode !== "none" && (
            <AriaColumn className={styles.column}>
              <Checkbox
                aria-label="Select all rows"
                selected={selectedRows.size === data.length}
                slot="selection"
                indeterminate={
                  selectedRows.size > 0 && selectedRows.size < data.length
                }
                onChange={handleHeaderCheckboxChange}
              />
            </AriaColumn>
          )}
          {columns.map((column) => (
            <AriaColumn
              key={column.key}
              className={styles.column}
              isRowHeader={column.isRowHeader}
            >
              {column.header}
            </AriaColumn>
          ))}
        </AriaTableHeader>
      )}
      <AriaTableBody className={styles["table-body"]}>
        {data.map((row, rowIndex) => (
          <AriaRow
            key={rowIndex}
            className={styles.row}
            data-selected={selectedRows.has(rowIndex)}
          >
            {selectionMode !== "none" && (
              <AriaCell className={styles.cell}>
                <Checkbox
                  aria-label={`Select row ${rowIndex + 1}`}
                  selected={selectedRows.has(rowIndex)}
                  slot="selection"
                  onChange={() => handleSelectionChange(rowIndex)}
                />
              </AriaCell>
            )}
            {columns.map((column) => (
              <AriaCell key={column.key} className={styles.cell}>
                {renderCell(row, column)}
              </AriaCell>
            ))}
          </AriaRow>
        ))}
      </AriaTableBody>
    </AriaTable>
  );
};
