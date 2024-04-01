import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ScreenColumnsBGType = {
  showRightArea?: boolean;

  /** Style props */
  screenColumnsBGWidth?: CSSProperties["width"];
  screenColumnsBGHeight?: CSSProperties["height"];
  screenColumnsBGPosition?: CSSProperties["position"];
  screenColumnsBGTop?: CSSProperties["top"];
  screenColumnsBGRight?: CSSProperties["right"];
  screenColumnsBGBottom?: CSSProperties["bottom"];
  screenColumnsBGLeft?: CSSProperties["left"];
  rightAreaOverflow?: CSSProperties["overflow"];
};

const ScreenColumnsBG: FunctionComponent<ScreenColumnsBGType> = ({
  showRightArea,
  screenColumnsBGWidth,
  screenColumnsBGHeight,
  screenColumnsBGPosition,
  screenColumnsBGTop,
  screenColumnsBGRight,
  screenColumnsBGBottom,
  screenColumnsBGLeft,
  rightAreaOverflow,
}) => {
  const screenColumnsBGStyle: CSSProperties = useMemo(() => {
    return {
      width: screenColumnsBGWidth,
      height: screenColumnsBGHeight,
      position: screenColumnsBGPosition,
      top: screenColumnsBGTop,
      right: screenColumnsBGRight,
      bottom: screenColumnsBGBottom,
      left: screenColumnsBGLeft,
    };
  }, [
    screenColumnsBGWidth,
    screenColumnsBGHeight,
    screenColumnsBGPosition,
    screenColumnsBGTop,
    screenColumnsBGRight,
    screenColumnsBGBottom,
    screenColumnsBGLeft,
  ]);

  const rightAreaStyle: CSSProperties = useMemo(() => {
    return {
      overflow: rightAreaOverflow,
    };
  }, [rightAreaOverflow]);

  return (
    <div
      className="w-[1366px] bg-grey-grey-10 max-w-full h-[60px]"
      style={screenColumnsBGStyle}
    >
      <div className="absolute h-full top-[0px] bottom-[0px] left-[89px] bg-grey-grey-30 w-px overflow-hidden" />
      {showRightArea && (
        <div
          className="absolute h-full top-[0px] right-[0px] bottom-[0px] bg-grey-grey-20 w-[417px] overflow-hidden"
          style={rightAreaStyle}
        />
      )}
    </div>
  );
};

export default ScreenColumnsBG;
