import styles from "./LoadingComp.module.scss";

export default function LoadingComp() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}
