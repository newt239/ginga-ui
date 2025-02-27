import styles from "./Box.module.css";

import { cn } from "@ginga-ui/utils";

export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.box, className)} {...props}>
      {children}
    </div>
  );
};
