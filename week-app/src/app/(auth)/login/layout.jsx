import styles from "./auth.module.css";

export default function AuthLayout({ children }) {
  return <div className={styles.authWrapper}>{children}</div>;
}
