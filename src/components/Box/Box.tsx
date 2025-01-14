import styles from "./Box.module.css";

import { cn } from "@/lib/utils";

export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.box, className)} {...props}>
      {children}
    </div>
  );
};

export default Box;
