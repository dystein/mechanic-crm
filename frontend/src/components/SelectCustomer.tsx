import { FunctionComponent } from "react";
import Customer from "./Customer";

interface ChoicePopupProps {
  onChooseVehicle: () => void;
  onChooseCustomer: () => void;
  onClose: () => void;
}

const SelectCustomer: FunctionComponent<ChoicePopupProps> = ({
  onChooseVehicle,
  onChooseCustomer,
  onClose,
}) => {
  return (
    <div
      className="w-[1366px] bg-black-black-50 h-[910px] overflow-hidden max-w-full max-h-full text-left text-lg text-primary-navy font-heading-h5-bold"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="absolute top-[calc(50%_-_291px)] left-[calc(50%_-_200px)] rounded-xl bg-primary-white w-[400px] h-[582px] overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-center justify-start py-3.5 pr-3.5 pl-6 gap-[14px]">
          <b className="flex-1 relative leading-[30px]">Select Customer</b>
          <div
            className="hover:cursor-pointer relative text-sm leading-[30px] font-medium text-olive text-right"
            onClick={onChooseCustomer}
          >
            Add New
          </div>
          <img
            className="hover:cursor-pointer w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
            alt=""
            src="/button10.svg"
            onClick={onClose}
          />
        </div>
        <div className="self-stretch bg-primary-white h-[504px] overflow-y-auto shrink-0 flex flex-col items-start justify-start text-base">
          <div className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[9px] pr-3.5 pl-6">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                <div className="w-11 relative rounded-6xl h-11 overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl bg-grey-grey-30" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[5px]">
                    <b className="relative leading-[27px]">Deanna</b>
                    <b className="flex-1 relative leading-[27px]">Annis</b>
                  </div>
                  <div className="self-stretch relative text-sm leading-[27px] text-grey-grey-70">
                    deannannis@gmail.com
                  </div>
                </div>
              </div>
              <img
                className="w-[50px] relative rounded-31xl h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/edit1.svg"
              />
            </div>
            <Customer
              avatar="/avatar2@2x.png"
              firstname="Andrea"
              lastname="Willis"
              email="andreawillis@gmail.com"
              edit="/edit1.svg"
            />
            <Customer
              avatar="/avatar3@2x.png"
              firstname="Brent"
              lastname="Rodrigues"
              email="brodrigues@gmail.com"
              edit="/edit1.svg"
            />
            <Customer
              avatar="/avatar4@2x.png"
              firstname="Andrew"
              lastname="Sommers"
              email="andrewsommers@gmail.com"
              edit="/edit1.svg"
            />
            <Customer
              avatar="/avatar5@2x.png"
              firstname="Edgar"
              lastname="Cavins"
              email="edgarcavins@gmail.com"
              edit="/edit1.svg"
            />
            <Customer
              avatar="/avatar6@2x.png"
              firstname="Theresa"
              lastname="Wells"
              email="theresawells@gmail.com"
              edit="/edit1.svg"
            />
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[9px] pr-3.5 pl-6 text-right text-sm text-olive">
              <a
                className="relative leading-[30px] font-medium no-underline text-current"
                href="./customers"
              >
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCustomer;
