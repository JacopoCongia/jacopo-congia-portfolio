import clsx from "clsx";
import styles from "./Button.module.css";

function Button({ children, variant = "primary", href, className, ...props }) {
  const combinedClasses = clsx(styles.base, styles[variant], className);

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
