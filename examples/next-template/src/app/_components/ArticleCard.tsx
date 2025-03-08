import { Box, Heading, Image, Paragraph } from "@ginga-ui/core";
import Link from "next/link";

import styles from "./ArticleCard.module.css";

import { ArticleProps } from "#/libs/cms";

const ArticleCard: React.FC<ArticleProps> = (props) => {
  return (
    <Link className={styles.root} href={`/posts/${props.id}`}>
      <Box className={styles["text-area"]}>
        <Heading level="h2">{props.title}</Heading>
        <Paragraph>{props.content}</Paragraph>
      </Box>
      <Box className={styles["image-area"]}>
        <Image
          src={props.eyecatch.url}
          alt={props.title}
          className={styles.image}
        />
      </Box>
    </Link>
  );
};

export default ArticleCard;
