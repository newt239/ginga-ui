import { Box, Button, Input } from "@ginga-ui/core";

import styles from "./Search.module.css";

const Search: React.FC = () => {
  return (
    <Box className={styles["search-area"]}>
      <Input placeholder="Search" />
      <Button>Search</Button>
    </Box>
  );
};

export default Search;
