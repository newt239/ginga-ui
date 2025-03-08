import { Heading } from "@ginga-ui/core";
import Search from "./Search";

import Link from "next/link";
import styles from "./Header.module.css";

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
