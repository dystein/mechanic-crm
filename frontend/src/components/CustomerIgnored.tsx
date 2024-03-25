import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CustomerIgnored.module.css";

export type CustomerIgnoredType = {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  email?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const CustomerIgnored: FunctionComponent<CustomerIgnoredType> = ({
  avatar,
  firstName,
  lastName,
  email,
  propMinWidth,
}) => {
  const firstNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.customerIgnored}>
      <div className={styles.customer}>
        <img className={styles.avatarIcon} loading="lazy" alt="" src={avatar} />
        <div className={styles.details}>
          <div className={styles.name}>
            <b className={styles.firstName} style={firstNameStyle}>
              {firstName}
            </b>
            <b className={styles.lastName}>{lastName}</b>
          </div>
          <div className={styles.email}>{email}</div>
        </div>
      </div>
      <img className={styles.editIcon} loading="lazy" alt="" src="/edit.svg" />
    </div>
  );
};

export default CustomerIgnored;
