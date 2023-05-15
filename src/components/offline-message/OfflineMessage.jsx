import styles from "./OfflineMessage.module.css";

const offline = (
  <svg
    width="200"
    height="200"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.06 8.13999C19.62 8.59999 20.44 8.55999 20.95 8.04999C21.54 7.45999 21.5 6.47999 20.85 5.94999C17.26 3.00999 12.65 1.91999 8.29996 2.68999L10.89 5.27999C13.78 5.24999 16.69 6.19999 19.06 8.13999ZM16.79 9.96999C16.01 9.39999 15.16 8.96999 14.27 8.66999L17.22 11.62C17.46 11.04 17.32 10.35 16.79 9.96999ZM12.95 14.23C12.3451 13.9194 11.6749 13.7574 10.995 13.7574C10.315 13.7574 9.64484 13.9194 9.03996 14.23C8.44996 14.54 8.33996 15.35 8.80996 15.82L10.28 17.29C10.67 17.68 11.3 17.68 11.69 17.29L13.16 15.82C13.65 15.35 13.55 14.54 12.95 14.23ZM18.68 15.9L3.11996 0.339994C3.02738 0.247412 2.91747 0.173972 2.79651 0.123867C2.67554 0.0737623 2.54589 0.0479736 2.41496 0.0479736C2.28403 0.0479736 2.15438 0.0737623 2.03342 0.123867C1.91246 0.173972 1.80254 0.247412 1.70996 0.339994C1.61738 0.432576 1.54394 0.542487 1.49384 0.663451C1.44373 0.784415 1.41794 0.914064 1.41794 1.04499C1.41794 1.17592 1.44373 1.30557 1.49384 1.42654C1.54394 1.5475 1.61738 1.65741 1.70996 1.74999L4.04996 4.09999C3.03996 4.59999 2.05996 5.20999 1.15996 5.94999C1.00724 6.07597 0.882553 6.23249 0.793897 6.4095C0.705241 6.58652 0.654579 6.78011 0.645162 6.97786C0.635745 7.17561 0.667783 7.37314 0.739217 7.55778C0.810652 7.74242 0.919905 7.91008 1.05996 8.04999C1.56996 8.55999 2.37996 8.60999 2.92996 8.14999C3.92996 7.32999 5.02996 6.68999 6.17996 6.21999L8.40996 8.44999C7.27996 8.74999 6.19996 9.24999 5.21996 9.95999C4.52996 10.46 4.48996 11.47 5.08996 12.07L5.09996 12.08C5.58996 12.57 6.35996 12.62 6.92996 12.21C8.09511 11.3938 9.47762 10.9446 10.9 10.92L17.27 17.29C17.66 17.68 18.29 17.68 18.68 17.29C19.07 16.92 19.07 16.29 18.68 15.9Z"
      fill="#A5A5A5"
    />
  </svg>
);

export default function OfflineMessage() {
  return (
    <div className={styles.content}>
      <div className={styles.divImgOffline}>
        <span>{offline}</span>
      </div>
      <div className={styles.divMessageOffline}>
        <p className={styles.titleMessage}>Erro...</p>
        <p className={styles.lineMessage}>
          Ops! Parece que Você está Offline...
        </p>
        <p className={styles.lineMessage}>
          Verifique sua rede e tente novamente!
        </p>
      </div>
    </div>
  );
}
