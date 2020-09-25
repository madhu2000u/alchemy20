import styles from "./IdPopup.module.css";

export default function IdPopup(props) {
  return (
    <>
      <div className={styles.modal}>
        <div onClick={props.handleClose} className={styles.modal_close_btn}>
          &times;
          <img src="/coming_soon.png" className={styles.coming_img}></img>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}
