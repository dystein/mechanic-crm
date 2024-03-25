import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DealIgnore.module.css";

export type DealIgnoreType = {
  image?: string;
  street?: string;
  city?: string;
  state?: string;
  appointmentDate?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const DealIgnore: FunctionComponent<DealIgnoreType> = ({
  image,
  street,
  city,
  state,
  appointmentDate,
  propMinWidth,
  propWidth,
  propMinWidth1,
}) => {
  const streetStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const appointmentDateStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth1,
    };
  }, [propWidth, propMinWidth1]);

  return (
    <div className={styles.dealIgnore}>
      <div className={styles.detail}>
        <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
        <div className={styles.customerAddress}>
          <div className={styles.streetParent}>
            <b className={styles.street} style={streetStyle}>
              {street}
            </b>
            <div className={styles.price}>
              <b className={styles.street1}>$</b>
              <b className={styles.city}>5750</b>
            </div>
          </div>
          <div className={styles.addressParent}>
            <div className={styles.address}>
              <div className={styles.city1}>{city}</div>
              <div className={styles.separator}>{`, `}</div>
              <div className={styles.state}>{state}</div>
              <div className={styles.zipCode}>12345</div>
            </div>
            <div
              className={styles.appointmentDate}
              style={appointmentDateStyle}
            >
              {appointmentDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealIgnore;
