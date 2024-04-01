import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TypeDefaultStyleWhiteType = {
  buttonText?: string;

  /** Style props */
  typeDefaultStyleWhitePosition?: CSSProperties["position"];
  typeDefaultStyleWhiteTop?: CSSProperties["top"];
  typeDefaultStyleWhiteRight?: CSSProperties["right"];
  typeDefaultStyleWhiteWidth?: CSSProperties["width"];
  typeDefaultStyleWhiteOverflow?: CSSProperties["overflow"];
  typeDefaultStyleWhiteBottom?: CSSProperties["bottom"];
  typeDefaultStyleWhiteLeft?: CSSProperties["left"];
  typeDefaultStyleWhiteBackgroundColor?: CSSProperties["backgroundColor"];
  typeDefaultStyleWhiteBorder?: CSSProperties["border"];
  typeDefaultStyleWhiteFlex?: CSSProperties["flex"];
  buttonColor?: CSSProperties["color"];
};

const TypeDefaultStyleWhite: FunctionComponent<TypeDefaultStyleWhiteType> = ({
  buttonText,
  typeDefaultStyleWhitePosition,
  typeDefaultStyleWhiteTop,
  typeDefaultStyleWhiteRight,
  typeDefaultStyleWhiteWidth,
  typeDefaultStyleWhiteOverflow,
  typeDefaultStyleWhiteBottom,
  typeDefaultStyleWhiteLeft,
  typeDefaultStyleWhiteBackgroundColor,
  typeDefaultStyleWhiteBorder,
  typeDefaultStyleWhiteFlex,
  buttonColor,
}) => {
  const typeDefaultStyleWhiteStyle: CSSProperties = useMemo(() => {
    return {
      position: typeDefaultStyleWhitePosition,
      top: typeDefaultStyleWhiteTop,
      right: typeDefaultStyleWhiteRight,
      width: typeDefaultStyleWhiteWidth,
      overflow: typeDefaultStyleWhiteOverflow,
      bottom: typeDefaultStyleWhiteBottom,
      left: typeDefaultStyleWhiteLeft,
      backgroundColor: typeDefaultStyleWhiteBackgroundColor,
      border: typeDefaultStyleWhiteBorder,
      flex: typeDefaultStyleWhiteFlex,
    };
  }, [
    typeDefaultStyleWhitePosition,
    typeDefaultStyleWhiteTop,
    typeDefaultStyleWhiteRight,
    typeDefaultStyleWhiteWidth,
    typeDefaultStyleWhiteOverflow,
    typeDefaultStyleWhiteBottom,
    typeDefaultStyleWhiteLeft,
    typeDefaultStyleWhiteBackgroundColor,
    typeDefaultStyleWhiteBorder,
    typeDefaultStyleWhiteFlex,
  ]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className="rounded-51xl bg-primary-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-6 text-left text-sm text-primary-navy font-heading-h5-bold border-[1px] border-solid border-grey-grey-30"
      style={typeDefaultStyleWhiteStyle}
    >
      <div className="relative leading-[30px] font-medium" style={buttonStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default TypeDefaultStyleWhite;
