import Link from "next/link";
import { Anchor, Heading, Paragraph } from "@ginga-ui/core";
import { COMPONENT_PROPS } from "#/data/props";
import { getDictionary } from "#/i18n/dictionaries";
import { localizePath } from "#/i18n/locales";
import { PropsTable } from "./props-table";

import type { ComponentPropsDoc, PropsInheritance } from "#/data/props";
import type { Locale } from "#/i18n/locales";

type PropsSectionProps = {
  id: string;
  locale: Locale;
};

const toSlug = (value: string) =>
  value
    .replace(/<.*>/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();

const mdnUrl = (element: string, locale: Locale) =>
  `https://developer.mozilla.org/${locale === "ja" ? "ja" : "en-US"}/docs/Web/HTML/Reference/Elements/${element === "h1-h6" ? "Heading_Elements" : element}`;

export function PropsSection({ id, locale }: PropsSectionProps) {
  const docs = COMPONENT_PROPS[id];
  if (!docs) return null;

  const { components } = getDictionary(locale);

  return (
    <section className="docs-section">
      <Heading level={2} id="props">
        {components.props}
      </Heading>
      {docs.map((doc) => (
        <PropsGroup key={doc.name} doc={doc} locale={locale} />
      ))}
    </section>
  );
}

function PropsGroup({
  doc,
  locale,
}: {
  doc: ComponentPropsDoc;
  locale: Locale;
}) {
  const { components } = getDictionary(locale);
  const hasOwnProps = doc.props.length > 0;

  return (
    <>
      <Heading level={3} id={`props-${toSlug(doc.name)}`}>
        {doc.name}
      </Heading>
      {doc.note && <Paragraph>{doc.note[locale]}</Paragraph>}
      {hasOwnProps && (
        <PropsTable
          rows={doc.props.map((prop) => ({
            ...prop,
            description: prop.required
              ? components.propRequired(prop.description[locale])
              : prop.description[locale],
          }))}
          labels={{
            name: components.propName,
            type: components.propType,
            defaultValue: components.propDefault,
            description: components.propDescription,
            table: components.propsTableLabel(doc.name),
          }}
        />
      )}
      {doc.inherits && (
        <Paragraph>
          <Inheritance
            inherits={doc.inherits}
            hasOwnProps={hasOwnProps}
            locale={locale}
          />
        </Paragraph>
      )}
    </>
  );
}

function Inheritance({
  inherits,
  hasOwnProps,
  locale,
}: {
  inherits: PropsInheritance;
  hasOwnProps: boolean;
  locale: Locale;
}) {
  const { components, nav } = getDictionary(locale);

  const externalLink = (href: string, label: string) => (
    <Anchor key={label} href={href} target="_blank" rel="noreferrer">
      <code>{label}</code>
      <span className="visually-hidden">{nav.opensInNewTab}</span>
    </Anchor>
  );

  const [template, link] = (() => {
    switch (inherits.kind) {
      case "aria":
        return [
          components.inheritsAria(hasOwnProps),
          externalLink(
            `https://react-aria.adobe.com/${inherits.page}#api`,
            inherits.name
          ),
        ];
      case "html":
        return [
          components.inheritsHtml(hasOwnProps),
          inherits.elements.map((element, index) => (
            <span key={element}>
              {index > 0 && " / "}
              {externalLink(mdnUrl(element, locale), element)}
            </span>
          )),
        ];
      case "ginga":
        return [
          components.inheritsGinga(hasOwnProps),
          <Link
            key={inherits.id}
            href={localizePath(`/components/${inherits.id}`, locale)}
            className="ginga-anchor"
          >
            <code>{inherits.name}</code>
          </Link>,
        ];
    }
  })();

  const [before, after] = template.split("{link}");

  return (
    <>
      {before}
      {link}
      {after}
    </>
  );
}
