import { FunctionComponent } from "react";
import Customer from "./SelectCustomerEntry";

interface ChoicePopupProps {
  onChooseCustomer: () => void;
  onAddCustomer: () => void;
  onClose: () => void;
}

const SelectCustomer: FunctionComponent<ChoicePopupProps> = ({
  onChooseCustomer,
  onAddCustomer,
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
            onClick={onAddCustomer}
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
          <div
            className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[4px]"
            onClick={onChooseCustomer} // Change this somehow to pass the chosen customer to Add New Vehicle popup
          >
            <Customer
              avatar="/avatar2@2x.png"
              firstname="Andrea"
              lastname="Willis"
              email="andreawillis@gmail.com"
              edit="/edit1.svg"
            />
            <Customer
              avatar="/avatar2@2x.png"
              firstname="Dylan"
              lastname="Spelbring"
              email="dspbring@gmail.com"
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
