import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.activityRepeatWrapper}>
      <div className={styles.activityRepeat}>
        <div className={styles.icon}>
          <div className={styles.icon1} />
        </div>
        <div className={styles.activity}>
          <div className={styles.content}>
            <div className={styles.dateTime}>17 Nov 2021</div>
            <div className={styles.notes}>
              Installation of the new air conditioning system
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
