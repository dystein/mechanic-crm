import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LabelNoType = {
  icon?: string;
  placeholder?: string;
  icon1?: string;
  showIcon?: boolean;
  iconVisible?: boolean;

  /** Style props */
  labelNoFlex?: CSSProperties["flex"];
  labelNoWidth?: CSSProperties["width"];
  labelNoAlignSelf?: CSSProperties["alignSelf"];
  labelNoBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderFlex?: CSSProperties["flex"];
};

const LabelNo: FunctionComponent<LabelNoType> = ({
  icon,
  placeholder,
  icon1,
  showIcon,
  iconVisible,
  labelNoFlex,
  labelNoWidth,
  labelNoAlignSelf,
  labelNoBackgroundColor,
  placeholderFlex,
}) => {
  const labelNoStyle: CSSProperties = useMemo(() => {
    return {
      flex: labelNoFlex,
      width: labelNoWidth,
      alignSelf: labelNoAlignSelf,
      backgroundColor: labelNoBackgroundColor,
    };
  }, [labelNoFlex, labelNoWidth, labelNoAlignSelf, labelNoBackgroundColor]);

  const placeholder1Style: CSSProperties = useMemo(() => {
    return {
      flex: placeholderFlex,
    };
  }, [placeholderFlex]);

  return (
    <div
      className="rounded-lg bg-grey-grey-10 box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-5 gap-[12px] text-left text-base text-grey-grey-70 font-heading-h5-bold flex-1 border-[1px] border-solid border-grey-grey-30"
      style={labelNoStyle}
    >
      {showIcon && <img className="w-5 relative h-5" alt="" src={icon} />}
      <div className="flex-1 relative leading-[30px]" style={placeholder1Style}>
        {placeholder}
      </div>
      {iconVisible && <img className="w-5 relative h-5" alt="" src={icon1} />}
    </div>
  );
};

export default LabelNo;
