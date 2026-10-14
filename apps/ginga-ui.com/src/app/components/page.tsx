import Link from "next/link";
import { Heading, Tab, TabList, TabPanel, Tabs } from "@ginga-ui/core";
import { ArrowRight } from "lucide-react";
import {
  CATEGORIES,
  COMPONENTS,
  getComponentsByCategory,
} from "#/data/components";
import type { ComponentCategory } from "#/data/components";
import styles from "./page.module.css";

export default function ComponentsPage() {
  const categories = (
    Object.entries(CATEGORIES) as [
      ComponentCategory,
      { label: string; order: number },
    ][]
  ).sort(([, a], [, b]) => a.order - b.order);

  return (
    <article>
      <Heading level="h1">全コンポーネント</Heading>
      <p className="docs-lead">
        Ginga UIが提供する全{COMPONENTS.length}
        個のコンポーネントを確認できます。タブでカテゴリを切り替えて、各コンポーネントの詳細ページにアクセスできます。
      </p>

      <Tabs className={styles.tabs}>
        <TabList aria-label="コンポーネントカテゴリ">
          {categories.map(([category, { label }]) => (
            <Tab key={category} id={category}>
              {label}
            </Tab>
          ))}
        </TabList>

        {categories.map(([category]) => (
          <TabPanel key={category} id={category}>
            <ul className={styles.grid}>
              {getComponentsByCategory(category).map((component) => (
                <li key={component.id}>
                  <Link
                    href={`/components/${component.id}`}
                    className={styles.card}
                  >
                    <span className={styles.cardTitle}>
                      {component.name}
                      <ArrowRight
                        className={styles.cardArrow}
                        aria-hidden="true"
                      />
                    </span>
                    <span className={styles.cardDescription}>
                      {component.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </TabPanel>
        ))}
      </Tabs>
    </article>
  );
}
