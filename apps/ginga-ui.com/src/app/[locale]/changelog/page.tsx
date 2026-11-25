import { notFound } from "next/navigation";
import { Heading, List, ListItem } from "@ginga-ui/core";
import { CHANGE_KIND_LABELS, CHANGE_KINDS, CHANGELOG } from "#/data/changelog";
import { alternatesFor } from "#/i18n/alternates";
import { getDictionary } from "#/i18n/dictionaries";
import { isLocale } from "#/i18n/locales";
import styles from "./page.module.css";

export const metadata = { alternates: alternatesFor("/changelog") };

const renderInlineCode = (text: string) =>
  text
    .split("`")
    .map((part, index) =>
      index % 2 === 1 ? <code key={index}>{part}</code> : part
    );

const toAnchorId = (version: string) => `v${version.replaceAll(".", "-")}`;

export default async function ChangelogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { changelog } = getDictionary(locale);

  return (
    <article>
      <Heading level={1}>{changelog.title}</Heading>
      <p className="docs-lead">{renderInlineCode(changelog.lead)}</p>

      {CHANGELOG.map(({ version, date, changes }) => (
        <section key={version} className={styles.release}>
          <div className={styles.releaseHeader}>
            <Heading level={2} id={toAnchorId(version)}>
              v{version}
            </Heading>
            {date && (
              <time dateTime={date} className={styles.date}>
                {date}
              </time>
            )}
          </div>
          {CHANGE_KINDS.map((kind) => {
            const items = changes.filter((change) => change.kind === kind);
            if (items.length === 0) return null;
            return (
              <div key={kind} className={styles.group}>
                <Heading level={3}>{CHANGE_KIND_LABELS[kind][locale]}</Heading>
                <List>
                  {items.map((item) => (
                    <ListItem key={item.ja}>
                      {renderInlineCode(item[locale])}
                    </ListItem>
                  ))}
                </List>
              </div>
            );
          })}
        </section>
      ))}
    </article>
  );
}
