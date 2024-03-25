import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DashboardCustomersCount.module.css";

export type DashboardCustomersCountType = {
  customers?: string;
  customersCount?: string;
  icon?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];

  /** Action props */
  onDashboardCustomersCountClick?: () => void;
};

const DashboardCustomersCount: FunctionComponent<
  DashboardCustomersCountType
> = ({
  customers,
  customersCount,
  icon,
  propMinWidth,
  propMinWidth1,
  onDashboardCustomersCountClick,
}) => {
  const customersStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const customersCountStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={styles.dashboardCustomersCount}
      onClick={onDashboardCustomersCountClick}
    >
      <div className={styles.customersParent}>
        <div className={styles.customers} style={customersStyle}>
          {customers}
        </div>
        <div className={styles.customersCount} style={customersCountStyle}>
          {customersCount}
        </div>
      </div>
      <div className={styles.iconWrapper}>
        <img className={styles.icon} loading="lazy" alt="" src={icon} />
      </div>
    </div>
  );
};

export default DashboardCustomersCount;
