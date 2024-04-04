import { FunctionComponent, useMemo, type CSSProperties } from "react";
import {useLocation} from "react-router-dom";

export type TypeRightIconStylePrimaryType = {
  button?: string;
  icon?: string;

  /** Style props */
  typeRightIconStylePrimaryBackgroundColor?: CSSProperties["backgroundColor"];
  typeRightIconStylePrimaryOverflow?: CSSProperties["overflow"];
  typeRightIconStylePrimaryPosition?: CSSProperties["position"];
  typeRightIconStylePrimaryTop?: CSSProperties["top"];
  typeRightIconStylePrimaryRight?: CSSProperties["right"];
};


const TypeRightIconStylePrimary: FunctionComponent<
  TypeRightIconStylePrimaryType
> = ({
  button,
  icon,
  typeRightIconStylePrimaryBackgroundColor,
  typeRightIconStylePrimaryOverflow,
  typeRightIconStylePrimaryPosition,
  typeRightIconStylePrimaryTop,
  typeRightIconStylePrimaryRight,
}) => {

  const location = useLocation();

  const isHidden = location.pathname === '/vehicle-detail' || location.pathname === '/customer-detail';

  // Conditional rendering to hide the component if isHidden is true
  if (isHidden) {
    return null;
  }

  const typeRightIconStylePrimaryStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: typeRightIconStylePrimaryBackgroundColor,
      overflow: typeRightIconStylePrimaryOverflow,
      position: typeRightIconStylePrimaryPosition,
      top: typeRightIconStylePrimaryTop,
      right: typeRightIconStylePrimaryRight,
    };
  }, [
    typeRightIconStylePrimaryBackgroundColor,
    typeRightIconStylePrimaryOverflow,
    typeRightIconStylePrimaryPosition,
    typeRightIconStylePrimaryTop,
    typeRightIconStylePrimaryRight,
  ]);

  return (
    <div
      className="rounded-51xl bg-primary-blue overflow-hidden flex flex-row items-center justify-center py-2.5 pr-4 pl-5 gap-[12px] text-left text-sm text-primary-white font-heading-h5-bold"
      style={typeRightIconStylePrimaryStyle}
    >
      <div className="relative leading-[30px] font-medium">{button}</div>
      <img className="w-5 relative h-5" alt="" src={icon} />
    </div>
  );
};

export default TypeRightIconStylePrimary;
