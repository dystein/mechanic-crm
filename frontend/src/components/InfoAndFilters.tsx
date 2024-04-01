import { FunctionComponent } from "react";

export type InfoAndFiltersType = {
  totalInfoRowCount?: string;
  customers?: string;
};

const InfoAndFilters: FunctionComponent<InfoAndFiltersType> = ({
  totalInfoRowCount,
  customers,
}) => {
  return (
    <div className="self-stretch relative h-[98px] overflow-hidden shrink-0 text-left text-sm text-primary-navy font-heading-h5-bold">
      <div className="absolute top-[34px] left-[24px] flex flex-row items-start justify-start gap-[5px] text-base">
        <b className="relative leading-[30px]">Total:</b>
        <b className="relative leading-[30px]">{totalInfoRowCount}</b>
        <b className="relative leading-[30px]">{customers}</b>
      </div>
      <div className="absolute top-[24px] right-[160px] rounded-11xl bg-primary-white box-border w-[235px] overflow-hidden flex flex-row items-center justify-center py-2.5 pr-5 pl-[25px] gap-[13px] border-[1px] border-solid border-grey-grey-30">
        <div className="relative leading-[30px] font-medium">
          Sort by: Date Created
        </div>
        <img
          className="w-6 relative h-6"
          alt=""
          src="/vuesaxoutlinearrowdown.svg"
        />
      </div>
      <div className="absolute top-[24px] right-[24px] rounded-11xl bg-primary-white overflow-hidden flex flex-row items-center justify-center py-2.5 pr-5 pl-[25px] gap-[13px] border-[1px] border-solid border-grey-grey-30">
        <div className="relative leading-[30px] font-medium">Filter</div>
        <img
          className="w-6 relative h-6"
          alt=""
          src="/vuesaxoutlinefilteradd.svg"
        />
      </div>
    </div>
  );
};

export default InfoAndFilters;
