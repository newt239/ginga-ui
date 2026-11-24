import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import styles from "./site-settings.module.css";

type SiteSettingsProps = {
  orientation?: "horizontal" | "vertical";
};

export function SiteSettings({
  orientation = "horizontal",
}: SiteSettingsProps) {
  return (
    <div className={styles.settings} data-orientation={orientation}>
      <LanguageSwitcher />
      <ThemeToggle size={orientation === "vertical" ? "md" : "sm"} />
    </div>
  );
}
