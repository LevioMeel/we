import styles from "./blueButton.module.css";


export default function BlueButton({ children, onClick }) {
  return (
    <button onClick={onClick}  className={styles.button}>
      {children}
    </button>
  );
}
