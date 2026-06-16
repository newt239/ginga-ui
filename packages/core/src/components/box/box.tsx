import { cn } from "@ginga-ui/utils";
import "./index.css";

export type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export const Box: React.FC<BoxProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("ginga-box", className)} {...props}>
      {children}
    </div>
  );
};
