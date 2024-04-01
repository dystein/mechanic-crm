import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LabelYesType = {
  label?: string;
  icon?: string;
  placeholder?: string;
  icon1?: string;
  showIcon?: boolean;
  showPlaceholder?: boolean;
  iconVisible?: boolean;

  /** Style props */
  labelYesFlex?: CSSProperties["flex"];
  labelYesAlignSelf?: CSSProperties["alignSelf"];
  labelYesHeight?: CSSProperties["height"];
  labelAlignSelf?: CSSProperties["alignSelf"];
  labelWidth?: CSSProperties["width"];
  inputHeight?: CSSProperties["height"];
  inputBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderFlex?: CSSProperties["flex"];
  placeholderWidth?: CSSProperties["width"];
};

const LabelYes: FunctionComponent<LabelYesType> = ({
  label,
  icon,
  placeholder,
  icon1,
  showIcon,
  showPlaceholder,
  iconVisible,
  labelYesFlex,
  labelYesAlignSelf,
  labelYesHeight,
  labelAlignSelf,
  labelWidth,
  inputHeight,
  inputBackgroundColor,
  placeholderFlex,
  placeholderWidth,
}) => {
  const labelYesStyle: CSSProperties = useMemo(() => {
    return {
      flex: labelYesFlex,
      alignSelf: labelYesAlignSelf,
      height: labelYesHeight,
    };
  }, [labelYesFlex, labelYesAlignSelf, labelYesHeight]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: labelAlignSelf,
      width: labelWidth,
    };
  }, [labelAlignSelf, labelWidth]);

  const inputStyle: CSSProperties = useMemo(() => {
    return {
      height: inputHeight,
      backgroundColor: inputBackgroundColor,
    };
  }, [inputHeight, inputBackgroundColor]);

  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      flex: placeholderFlex,
      width: placeholderWidth,
    };
  }, [placeholderFlex, placeholderWidth]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[12px] text-left text-base text-primary-navy font-heading-h5-bold flex-1"
      style={labelYesStyle}
    >
      <b className="self-stretch relative leading-[30px]" style={labelStyle}>
        {label}
      </b>
      <div
        className="self-stretch rounded-lg bg-grey-grey-10 overflow-hidden flex flex-row items-center justify-start py-2.5 px-5 gap-[12px] text-grey-grey-70 border-[1px] border-solid border-grey-grey-30"
        style={inputStyle}
      >
        {showIcon && <img className="w-5 relative h-5" alt="" src={icon} />}
        {showPlaceholder && (
          <div
            className="flex-1 relative leading-[30px]"
            style={placeholderStyle}
          >
            {placeholder}
          </div>
        )}
        {iconVisible && <img className="w-5 relative h-5" alt="" src={icon1} />}
      </div>
    </div>
  );
};

export default LabelYes;
