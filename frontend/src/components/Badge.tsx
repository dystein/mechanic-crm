import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BadgeType = {
  statusLabel?: string;

  /** Style props */
  badgeBackgroundColor?: CSSProperties["backgroundColor"];
  badgePosition?: CSSProperties["position"];
  badgeTop?: CSSProperties["top"];
  badgeRight?: CSSProperties["right"];
  badgeWidth?: CSSProperties["width"];
  badgeHeight?: CSSProperties["height"];
  badgeColor?: CSSProperties["color"];
  badgeTextTransform?: CSSProperties["textTransform"];
  badgeFontWeight?: CSSProperties["fontWeight"];
};

const Badge: FunctionComponent<BadgeType> = ({
  statusLabel,
  badgeBackgroundColor,
  badgePosition,
  badgeTop,
  badgeRight,
  badgeWidth,
  badgeHeight,
  badgeColor,
  badgeTextTransform,
  badgeFontWeight,
}) => {
  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: badgeBackgroundColor,
      position: badgePosition,
      top: badgeTop,
      right: badgeRight,
      width: badgeWidth,
      height: badgeHeight,
    };
  }, [
    badgeBackgroundColor,
    badgePosition,
    badgeTop,
    badgeRight,
    badgeWidth,
    badgeHeight,
  ]);

  const badge1Style: CSSProperties = useMemo(() => {
    return {
      color: badgeColor,
      textTransform: badgeTextTransform,
      fontWeight: badgeFontWeight,
    };
  }, [badgeColor, badgeTextTransform, badgeFontWeight]);

  return (
    <div
      className="rounded-81xl bg-primary-blue-light flex flex-row items-center justify-center py-2.5 px-5 text-left text-xs text-primary-blue font-heading-h5-bold"
      style={badgeStyle}
    >
      <b className="relative leading-[20px]" style={badge1Style}>
        {statusLabel}
      </b>
    </div>
  );
};

export default Badge;
