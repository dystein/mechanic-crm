import { FunctionComponent } from "react";
import styles from "./Detail.module.css";

const Detail: FunctionComponent = () => {
  return (
    <div className={styles.detail}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image-3@2x.png"
      />
      <div className={styles.customerAddress}>
        <b className={styles.street}>2020 Mercedes-Benz S550</b>
        <div className={styles.cityParent}>
          <div className={styles.city}>6ZAW303</div>
          <div className={styles.state}>OH</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
