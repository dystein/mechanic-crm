import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type BaseType = {
  /** Style props */
  baseWidth?: CSSProperties["width"];
  basePosition?: CSSProperties["position"];
  baseRight?: CSSProperties["right"];
  baseBottom?: CSSProperties["bottom"];
  baseLeft?: CSSProperties["left"];
  baseHeight?: CSSProperties["height"];
  baseTop?: CSSProperties["top"];
  baseAlignSelf?: CSSProperties["alignSelf"];
};

const Base: FunctionComponent<BaseType> = ({
  baseWidth,
  basePosition,
  baseRight,
  baseBottom,
  baseLeft,
  baseHeight,
  baseTop,
  baseAlignSelf,
}) => {
  const baseStyle: CSSProperties = useMemo(() => {
    return {
      width: baseWidth,
      position: basePosition,
      right: baseRight,
      bottom: baseBottom,
      left: baseLeft,
      height: baseHeight,
      top: baseTop,
      alignSelf: baseAlignSelf,
    };
  }, [
    baseWidth,
    basePosition,
    baseRight,
    baseBottom,
    baseLeft,
    baseHeight,
    baseTop,
    baseAlignSelf,
  ]);

  return (
    <div
      className="w-[50px] bg-grey-grey-30 h-px overflow-hidden"
      style={baseStyle}
    />
  );
};

export default Base;
