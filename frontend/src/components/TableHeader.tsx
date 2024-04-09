import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TableHeaderType = {
  icon?: string;
  name1?: string;
  deals?: string;
  email?: string;
  phone?: string;
  address?: string;
  dealsColumn?: boolean;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
  propTop?: CSSProperties["top"];
  propWidth2?: CSSProperties["width"];
  propFlex1?: CSSProperties["flex"];
  propWidth3?: CSSProperties["width"];
};

const TableHeader: FunctionComponent<TableHeaderType> = ({
  name1,
  deals,
  email,
  phone,
  address,
  dealsColumn,
  propWidth,
  propFlex,
  propWidth1,
  propTop,
  propWidth2,
  propFlex1,
  propWidth3,
}) => {
  const dealsColumnStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const emailColumnStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
    };
  }, [propFlex, propWidth1]);

  const emailStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const phoneColumnStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const addressColumnStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
      width: propWidth3,
    };
  }, [propFlex1, propWidth3]);

  return (
    <div className="self-stretch relative h-[60px] overflow-hidden shrink-0 text-left text-base text-grey-grey-70 font-heading-h5-bold">
      <div className="absolute h-[calc(100%_-_1px)] w-full top-[0px] right-[0px] bottom-[1px] left-[0px] flex flex-row items-center justify-start py-0 pr-6 pl-3 box-border gap-[24px]">
        <div className="flex-1 relative h-[30px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] leading-[30px] font-medium">
            {name1}
          </div>
        </div>
        {!dealsColumn && (
          <div
            className="w-[60px] relative h-[30px] overflow-hidden shrink-0 hidden"
            style={dealsColumnStyle}
          >
            <div className="absolute top-[calc(50%_-_14.5px)] left-[0px] leading-[30px] font-medium">
              {deals}
            </div>
          </div>
        )}
        <div
          className="flex-1 relative h-[30px] overflow-hidden"
          style={emailColumnStyle}
        >
          <div
            className="absolute top-[calc(50%_-_14.5px)] left-[0px] leading-[30px] font-medium"
            style={emailStyle}
          >
            {email}
          </div>
        </div>
        <div
          className="w-[140px] relative h-[30px] overflow-hidden shrink-0"
          style={phoneColumnStyle}
        >
          <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px] font-medium">
            {phone}
          </div>
        </div>
        <div
          className="flex-1 relative h-[30px] overflow-hidden"
          style={addressColumnStyle}
        >
          <div className="absolute top-[calc(50%_-_15px)] left-[0px] leading-[30px] font-medium">
            {address}
          </div>
        </div>
        <div className="w-[60px] relative h-[30px] overflow-hidden shrink-0 text-center">
          <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_15px)] leading-[30px] font-medium">
            Edit
          </div>
        </div>
      </div>
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-grey-grey-30 h-px" />
    </div>
  );
};

export default TableHeader;
