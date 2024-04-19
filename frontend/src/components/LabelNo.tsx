import React, { FunctionComponent, useMemo, CSSProperties, ChangeEvent } from "react";

export type LabelNoType = {
  icon?: string;
  placeholder?: string;
  icon1?: string;
  showIcon?: boolean;
  iconVisible?: boolean;
  value?: string; // Utilizing value prop
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; // Utilizing onChange prop
  name?: string; // Added name prop for handling form fields

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
  showIcon = false,
  iconVisible,
  labelNoFlex,
  labelNoWidth,
  labelNoAlignSelf,
  labelNoBackgroundColor,
  placeholderFlex,
  value,
  onChange,
  name,
}) => {
  const labelNoStyle: CSSProperties = useMemo(() => ({
      flex: labelNoFlex,
      width: labelNoWidth,
      alignSelf: labelNoAlignSelf,
      backgroundColor: labelNoBackgroundColor,
    }), [labelNoFlex, labelNoWidth, labelNoAlignSelf, labelNoBackgroundColor]);

  return (
    <div className="rounded-lg bg-grey-grey-10 overflow-hidden flex flex-row items-center justify-start py-2.5 px-5 gap-[12px] border-[1px] border-solid border-grey-grey-30" style={labelNoStyle}>
      {showIcon && <img className="w-5 h-5" alt="" src={icon} />}
      <input
        type="text"
        className="flex-1 rounded-lg py-2.5 px-5"
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        name={name} // Include the name attribute here
      />
      {iconVisible && <img className="w-5 h-5" alt="" src={icon1} />}
    </div>
  );
};

export default LabelNo;
