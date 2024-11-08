import styles from "./inputs.module.css";

export default function BlueButton({ ...props }) {
  return (
    <div style={props.style}>
      <div className={styles.title}>Email</div>
      <input
        type="text"
        placeholder={props.placeholder}
        className={styles.input}
      />
    </div>
  );
}
