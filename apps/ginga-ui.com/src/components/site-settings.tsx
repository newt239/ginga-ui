import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import styles from "./site-settings.module.css";

export function SiteSettings() {
  return (
    <div className={styles.settings}>
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  );
}
