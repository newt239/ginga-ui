import Link from "next/link";
import {
  Heading,
  Paragraph,
  Card,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "@ginga-ui/core";
import { CATEGORIES, getComponentsByCategory } from "#/data/components";
import type { ComponentCategory } from "#/data/components";

export default function ComponentsPage() {
  const categories = Object.entries(CATEGORIES).sort(
    ([, a], [, b]) => a.order - b.order
  ) as [ComponentCategory, { label: string; order: number }][];

  return (
    <article>
      <Heading level="h1">全コンポーネント</Heading>
      <Paragraph>
        Ginga
        UIが提供する全19個のコンポーネントを確認できます。タブでカテゴリを切り替えて、各コンポーネントの詳細ページにアクセスできます。
      </Paragraph>

      <div style={{ marginTop: "2rem" }}>
        <Tabs>
          <TabList aria-label="コンポーネントカテゴリ">
            {categories.map(([category, { label }]) => (
              <Tab key={category} id={category}>
                {label}
              </Tab>
            ))}
          </TabList>

          {categories.map(([category]) => {
            const components = getComponentsByCategory(
              category as ComponentCategory
            );

            return (
              <TabPanel key={category} id={category}>
                <div className="component-grid">
                  {components.map((component) => (
                    <Link
                      key={component.id}
                      href={`/components/${component.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card className="component-card">
                        <Heading level="h3">{component.name}</Heading>
                        <Paragraph>{component.description}</Paragraph>
                        <span className="view-details">詳細を見る →</span>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </article>
  );
}
