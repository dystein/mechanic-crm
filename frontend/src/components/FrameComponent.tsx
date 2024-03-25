import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  primaryTitle?: string;
  metric?: string;
  graph?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  primaryTitle,
  metric,
  graph,
  propPadding,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const primaryTitleStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.boundsParent} style={frameDivStyle}>
      <img className={styles.boundsIcon} alt="" src="/bounds.svg" />
      <div className={styles.primaryTitle} style={primaryTitleStyle}>
        {primaryTitle}
      </div>
      <div className={styles.metricParent}>
        <b className={styles.metric}>{metric}</b>
        <img className={styles.graphIcon} loading="lazy" alt="" src={graph} />
      </div>
    </div>
  );
};

export default FrameComponent;
