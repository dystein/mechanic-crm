import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DefaultButtonType = {
  buttonText?: string;

  /** Style props */
  DefaultButtonPosition?: CSSProperties["position"];
  DefaultButtonTop?: CSSProperties["top"];
  DefaultButtonRight?: CSSProperties["right"];
  DefaultButtonWidth?: CSSProperties["width"];
  DefaultButtonOverflow?: CSSProperties["overflow"];
  DefaultButtonBottom?: CSSProperties["bottom"];
  DefaultButtonLeft?: CSSProperties["left"];
  DefaultButtonBackgroundColor?: CSSProperties["backgroundColor"];
  DefaultButtonBorder?: CSSProperties["border"];
  DefaultButtonFlex?: CSSProperties["flex"];
  buttonColor?: CSSProperties["color"];
};

const DefaultButton: FunctionComponent<DefaultButtonType> = ({
  buttonText,
  DefaultButtonPosition,
  DefaultButtonTop,
  DefaultButtonRight,
  DefaultButtonWidth,
  DefaultButtonOverflow,
  DefaultButtonBottom,
  DefaultButtonLeft,
  DefaultButtonBackgroundColor,
  DefaultButtonBorder,
  DefaultButtonFlex,
  buttonColor,
}) => {
  const DefaultButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: DefaultButtonPosition,
      top: DefaultButtonTop,
      right: DefaultButtonRight,
      width: DefaultButtonWidth,
      overflow: DefaultButtonOverflow,
      bottom: DefaultButtonBottom,
      left: DefaultButtonLeft,
      backgroundColor: DefaultButtonBackgroundColor,
      border: DefaultButtonBorder,
      flex: DefaultButtonFlex,
    };
  }, [
    DefaultButtonPosition,
    DefaultButtonTop,
    DefaultButtonRight,
    DefaultButtonWidth,
    DefaultButtonOverflow,
    DefaultButtonBottom,
    DefaultButtonLeft,
    DefaultButtonBackgroundColor,
    DefaultButtonBorder,
    DefaultButtonFlex,
  ]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div
      className="rounded-51xl bg-primary-white overflow-hidden flex flex-row items-center justify-center py-2.5 px-6 text-left text-sm text-primary-navy font-heading-h5-bold border-[1px] border-solid border-grey-grey-30"
      style={DefaultButtonStyle}
    >
      <div className="relative leading-[30px] font-medium" style={buttonStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default DefaultButton;
