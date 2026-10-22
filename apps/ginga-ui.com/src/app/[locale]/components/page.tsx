import Link from "next/link";
import { notFound } from "next/navigation";
import { Heading, Tab, TabList, TabPanel, Tabs } from "@ginga-ui/core";
import { ArrowRight } from "lucide-react";
import {
  COMPONENTS,
  getComponentsByCategory,
  SORTED_CATEGORIES,
} from "#/data/components";
import { alternatesFor } from "#/i18n/alternates";
import { getDictionary } from "#/i18n/dictionaries";
import { isLocale, localizePath } from "#/i18n/locales";
import styles from "./page.module.css";

export const metadata = { alternates: alternatesFor("/components") };

export default async function ComponentsPage({
  params,
}: PageProps<"/[locale]/components">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { nav, components } = getDictionary(locale);

  return (
    <article>
      <Heading level="h1">{nav.allComponents}</Heading>
      <p className="docs-lead">{components.lead(COMPONENTS.length)}</p>

      <Tabs className={styles.tabs}>
        <TabList aria-label={components.categoryTabs}>
          {SORTED_CATEGORIES.map(([category, { label }]) => (
            <Tab key={category} id={category}>
              {label[locale]}
            </Tab>
          ))}
        </TabList>

        {SORTED_CATEGORIES.map(([category]) => (
          <TabPanel key={category} id={category}>
            <ul className={styles.grid}>
              {getComponentsByCategory(category).map((component) => (
                <li key={component.id}>
                  <Link
                    href={localizePath(`/components/${component.id}`, locale)}
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
                      {component.description[locale]}
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
