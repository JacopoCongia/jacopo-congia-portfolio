import { forwardRef } from "react";
import styles from "./Section.module.css";

const Section = forwardRef(
  ({ id, children, className = "", ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`${styles.baseSection} ${className}`}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";
export default Section;
