import styles from "./styles.module.css";

export default function Modal({ title, children, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <div className={styles.header}>
          <h2>{title}</h2>

          <button
            className={styles.close}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className={styles.body}>
          {children}
        </div>

      </div>
    </div>
  );
}