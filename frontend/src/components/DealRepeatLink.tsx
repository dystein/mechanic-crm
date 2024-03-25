import { FunctionComponent, useCallback } from "react";
import styles from "./DealRepeatLink.module.css";

const DealRepeatLink: FunctionComponent = () => {
  const onDealRepeatLinkClick = useCallback(() => {
    // Please sync "Vehicle Detail" to the project
  }, []);

  return (
    <div className={styles.dealRepeatLink} onClick={onDealRepeatLinkClick}>
      <div className={styles.detail}>
        <div className={styles.image}>
          <div className={styles.image1} />
        </div>
        <div className={styles.customerAddress}>
          <div className={styles.streetParent}>
            <b className={styles.street}>2007 BMW 335i</b>
            <div className={styles.price}>
              <b className={styles.street1}>$</b>
              <b className={styles.city}>5750</b>
            </div>
          </div>
          <div className={styles.addressParent}>
            <div className={styles.address}>
              <div className={styles.city1}>3EIR305</div>
              <div className={styles.separator}>{`, `}</div>
              <div className={styles.state}>CA</div>
              <div className={styles.zipCode}>12345</div>
            </div>
            <div className={styles.appointmentDate}>Nov 14, 07:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealRepeatLink;
