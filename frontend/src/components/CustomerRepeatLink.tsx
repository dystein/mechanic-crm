import { FunctionComponent, useCallback } from "react";
import styles from "./CustomerRepeatLink.module.css";

const CustomerRepeatLink: FunctionComponent = () => {
  const onCustomerRepeatLinkClick = useCallback(() => {
    // Please sync "Customer Detail" to the project
  }, []);

  return (
    <div
      className={styles.customerRepeatLink}
      onClick={onCustomerRepeatLinkClick}
    >
      <div className={styles.customer}>
        <div className={styles.avatar}>
          <div className={styles.avatar1} />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            <b className={styles.firstName}>Deanna</b>
            <b className={styles.lastName}>Annis</b>
          </div>
          <div className={styles.email}>deannannis@gmail.com</div>
        </div>
      </div>
      <img className={styles.editIcon} loading="lazy" alt="" src="/edit.svg" />
    </div>
  );
};

export default CustomerRepeatLink;
