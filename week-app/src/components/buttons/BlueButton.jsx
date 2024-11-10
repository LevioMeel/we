import styles from "./blueButton.module.css";

export default function BlueButton({ children, onClick }) {
  return (
    <button type="submit" className={styles.button}>
      {children}
    </button>
  );
}
