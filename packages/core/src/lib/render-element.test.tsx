import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Anchor } from "../components/anchor";
import { Box } from "../components/box";
import { Heading } from "../components/heading";

const RouterLink: React.FC<React.ComponentProps<"a">> = ({
  children,
  ...props
}) => (
  <a data-router-link {...props}>
    {children}
  </a>
);

describe("render prop", () => {
  it("render を渡さないと既定の要素で描画する", () => {
    expect(renderToStaticMarkup(<Box>content</Box>)).toBe(
      '<div class="ginga-box">content</div>'
    );
  });

  it("HTML 要素のコンポーネントで className と children を差し替え先に渡す", () => {
    const html = renderToStaticMarkup(
      <Box className="extra" render={(props) => <section {...props} />}>
        content
      </Box>
    );
    expect(html).toBe('<section class="ginga-box extra">content</section>');
  });

  it("Heading は level に応じたタグの props を差し替え先に渡す", () => {
    const html = renderToStaticMarkup(
      <Heading
        level={2}
        render={({ children, ...props }) => (
          <h2 data-custom {...props}>
            {children}
          </h2>
        )}
      >
        title
      </Heading>
    );
    expect(html).toBe(
      '<h2 data-custom="true" class="ginga-heading ginga-heading-level-2">title</h2>'
    );
  });

  it("RAC のコンポーネントでは RAC の render に渡す", () => {
    const html = renderToStaticMarkup(
      <Anchor href="/docs" render={(props) => <RouterLink {...props} />}>
        Docs
      </Anchor>
    );
    expect(html).toContain("data-router-link");
    expect(html).toContain('href="/docs"');
    expect(html).toContain("ginga-anchor");
    expect(html).toContain(">Docs</a>");
  });

  it("href がない Anchor は render を使わず span で描画する", () => {
    const html = renderToStaticMarkup(
      <Anchor render={(props) => <RouterLink {...props} />}>Docs</Anchor>
    );
    expect(html).not.toContain("data-router-link");
    expect(html).toMatch(/^<span[^>]*class="ginga-anchor"/);
  });
});
