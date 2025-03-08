import { Heading } from "@ginga-ui/core";

import styles from "./ArticleList.module.css";

import ArticleCard from "#/app/_components/ArticleCard";
import { ArticleProps } from "#/libs/cms";

type ArticleListProps = {
  posts: ArticleProps[];
};

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => {
  return (
    <>
      <Heading level="h1">All Posts</Heading>
      <ul className={styles.root}>
        {posts.map((item) => (
          <ArticleCard key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default ArticleList;
