"use client";

import { isValidElement } from "react";

import { Checkbox } from "../checkbox";
import { cn } from "@ginga-ui/utils";
import {
  Cell as AriaCell,
  Column as AriaColumn,
  Row as AriaRow,
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
  composeRenderProps,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";
import type { Key, Selection } from "react-aria-components";

export interface TableColumn<T> {
  key: string;
  header: React.ReactNode;
  accessor: keyof T | ((row: T) => React.ReactNode);
  isRowHeader?: boolean;
  allowsSorting?: boolean;
}

export type TableProps<T> = OmitStrict<
  React.ComponentProps<typeof AriaTable>,
  "children" | "onSelectionChange" | "aria-label"
> & {
  data: T[];
  columns: TableColumn<T>[];
  getRowKey?: (row: T, index: number) => Key;
  showHeader?: boolean;
  striped?: boolean;
  emptyMessage?: React.ReactNode;
  onSelectionChange?: (selectedRows: T[], keys: Selection) => void;
  "aria-label": string;
};

const resolveRowKey = <T extends object>(
  row: T,
  index: number,
  getRowKey?: (row: T, index: number) => Key
): Key => {
  if (getRowKey) return getRowKey(row, index);
  if ("id" in row) {
    const { id } = row;
    if (typeof id === "string" || typeof id === "number") return id;
  }
  return index;
};

const toCellContent = (value: unknown): React.ReactNode => {
  if (value === null || value === undefined) return null;
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    isValidElement(value)
  ) {
    return value;
  }
  return String(value);
};

export const Table = <T extends object>({
  data,
  columns,
  getRowKey,
  className,
  showHeader = true,
  striped = false,
  emptyMessage,
  selectionMode = "none",
  onSelectionChange,
  ...props
}: TableProps<T>): React.ReactElement => {
  const rows = data.map((row, index) => ({
    row,
    key: resolveRowKey(row, index, getRowKey),
  }));
  const hasRowHeader = columns.some((column) => column.isRowHeader);

  const handleSelectionChange = (keys: Selection) => {
    onSelectionChange?.(
      keys === "all"
        ? data
        : rows.filter(({ key }) => keys.has(key)).map(({ row }) => row),
      keys
    );
  };

  const renderCell = (row: T, column: TableColumn<T>) =>
    typeof column.accessor === "function"
      ? column.accessor(row)
      : toCellContent(row[column.accessor]);

  return (
    <div className="ginga-table-container">
      <AriaTable
        className={composeRenderProps(className, (c) => cn("ginga-table", c))}
        data-striped={striped || undefined}
        selectionMode={selectionMode}
        onSelectionChange={handleSelectionChange}
        {...props}
      >
        <AriaTableHeader
          className={cn(
            "ginga-table-header",
            !showHeader && "ginga-table-header-hidden"
          )}
        >
          {selectionMode !== "none" && (
            <AriaColumn className="ginga-table-column ginga-table-selection">
              {selectionMode === "multiple" && <Checkbox slot="selection" />}
            </AriaColumn>
          )}
          {columns.map((column, index) => (
            <AriaColumn
              key={column.key}
              id={column.key}
              className="ginga-table-column"
              isRowHeader={column.isRowHeader || (!hasRowHeader && index === 0)}
              allowsSorting={column.allowsSorting}
            >
              {({ allowsSorting, sortDirection }) => (
                <>
                  {column.header}
                  {allowsSorting && (
                    <span
                      className="ginga-table-sort-indicator"
                      data-direction={sortDirection}
                      aria-hidden="true"
                    />
                  )}
                </>
              )}
            </AriaColumn>
          ))}
        </AriaTableHeader>
        <AriaTableBody
          className="ginga-table-body"
          renderEmptyState={
            emptyMessage === undefined
              ? undefined
              : () => <div className="ginga-table-empty">{emptyMessage}</div>
          }
        >
          {rows.map(({ row, key }) => (
            <AriaRow key={key} id={key} className="ginga-table-row">
              {selectionMode !== "none" && (
                <AriaCell className="ginga-table-cell ginga-table-selection">
                  <Checkbox slot="selection" />
                </AriaCell>
              )}
              {columns.map((column) => (
                <AriaCell key={column.key} className="ginga-table-cell">
                  {renderCell(row, column)}
                </AriaCell>
              ))}
            </AriaRow>
          ))}
        </AriaTableBody>
      </AriaTable>
    </div>
  );
};
