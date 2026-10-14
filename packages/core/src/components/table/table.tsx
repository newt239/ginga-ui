"use client";

import { useState } from "react";

import { Checkbox } from "../checkbox";
import { cn } from "@ginga-ui/utils";
import {
  Cell as AriaCell,
  Column as AriaColumn,
  Row as AriaRow,
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
} from "react-aria-components";
import "./index.css";

import type { Selection } from "react-aria-components";

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
  striped?: boolean;
  selectionMode?: "none" | "single" | "multiple";
  onSelectionChange?: (selectedRows: T[]) => void;
  "aria-label": string;
}

export const Table = <T extends object>({
  data,
  columns,
  className,
  showHeader = true,
  striped = false,
  selectionMode = "none",
  onSelectionChange,
  "aria-label": ariaLabel,
}: TableProps<T>) => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys);
    onSelectionChange?.(
      keys === "all" ? data : data.filter((_, index) => keys.has(index))
    );
  };

  const renderCell = (row: T, column: TableColumn<T>) => {
    const value =
      typeof column.accessor === "function"
        ? column.accessor(row)
        : row[column.accessor];
    return value as React.ReactNode;
  };

  return (
    <div className="ginga-table-container">
      <AriaTable
        className={cn("ginga-table", className)}
        aria-label={ariaLabel}
        data-striped={striped || undefined}
        selectionMode={selectionMode}
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
        {showHeader && (
          <AriaTableHeader className="ginga-table-header">
            {selectionMode !== "none" && (
              <AriaColumn className="ginga-table-column ginga-table-selection">
                {selectionMode === "multiple" && <Checkbox slot="selection" />}
              </AriaColumn>
            )}
            {columns.map((column) => (
              <AriaColumn
                key={column.key}
                className="ginga-table-column"
                isRowHeader={column.isRowHeader}
              >
                {column.header}
              </AriaColumn>
            ))}
          </AriaTableHeader>
        )}
        <AriaTableBody className="ginga-table-body">
          {data.map((row, rowIndex) => (
            <AriaRow key={rowIndex} id={rowIndex} className="ginga-table-row">
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
