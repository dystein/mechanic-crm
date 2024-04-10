import React, { FunctionComponent, useMemo, CSSProperties, ChangeEvent } from "react";

export type LabelYesType = {
  label?: string;
  icon?: string;
  placeholder?: string;
  icon1?: string;
  showIcon?: boolean;
  showPlaceholder?: boolean;
  iconVisible?: boolean;
  value?: string; // Added value prop
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; // Added onChange prop

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
  showIcon = false,
  showPlaceholder = true,
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
  value, // Utilizing value prop
  onChange, // Utilizing onChange prop
}) => {
  const labelYesStyle: CSSProperties = useMemo(() => ({
      flex: labelYesFlex,
      alignSelf: labelYesAlignSelf,
      height: labelYesHeight,
    }), [labelYesFlex, labelYesAlignSelf, labelYesHeight]);

  const labelStyle: CSSProperties = useMemo(() => ({
      alignSelf: labelAlignSelf,
      width: labelWidth,
    }), [labelAlignSelf, labelWidth]);

  const inputStyle: CSSProperties = useMemo(() => ({
      height: inputHeight,
      backgroundColor: inputBackgroundColor,
    }), [inputHeight, inputBackgroundColor]);

  return (
    <div className="flex flex-col items-start justify-start gap-[12px] text-left text-base text-primary-navy font-heading-h5-bold flex-1" style={labelYesStyle}>
      <b className="self-stretch relative leading-[30px]" style={labelStyle}>{label}</b>
      <input
        type="text"
        className="self-stretch rounded-lg py-2.5 px-5 border-[1px] border-solid border-grey-grey-30"
        style={inputStyle}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LabelYes;
