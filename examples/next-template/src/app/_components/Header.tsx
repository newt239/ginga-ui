import { Heading } from "@ginga-ui/core";
import Link from "next/link";

import styles from "./Header.module.css";
import Search from "./Search";

const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <Link href="/">
        <Heading level="h1" className={styles.title}>
          Ginga Blog
        </Heading>
      </Link>
      <Search />
    </header>
  );
};

export default Header;
