import { LanguageSwitcher } from "./language-switcher";
import styles from "./site-settings.module.css";

export function SiteSettings() {
  return (
    <div className={styles.settings}>
      <LanguageSwitcher />
    </div>
  );
}
