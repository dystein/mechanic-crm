import React, { useState, FunctionComponent } from "react";
import LabelYes from "./LabelYes"; // Make sure this component accepts 'label', 'value', and 'onChange' props.
import LabelNo from "./LabelNo"; // Make sure this component accepts 'placeholder', 'value', and 'onChange' props.
import DefaultButton from "./DefaultButton"; // Make sure this component accepts 'buttonText', 'onClick', and 'type' props.

interface ChoicePopupProps {
  onClose: () => void;
}

const AddNewCustomer: FunctionComponent<ChoicePopupProps> = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSaveCustomer = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement the POST request to save the customer data
    // If successful, close the form and reset the state
  };

  return (
    <div
      className="w-[1366px] bg-black-black-50 h-[910px] max-w-full max-h-full overflow-auto text-left text-lg text-primary-navy font-heading-h5-bold"
            style={{ height: "100vh", width: "100vw" }}
    >
      <div className="absolute top-[calc(50%_-_350px)] left-[calc(50%_-_310px)] rounded-xl bg-primary-white w-[620px] overflow-hidden flex flex-col items-start justify-start">
        <header className="flex justify-between items-center p-4 border-b">
            <h2 className="flex-1 relative leading-[30px]">Add New Customer</h2>
            <img
              className="hover:cursor-pointer w-[50px] relative rounded-31xl h-[50px]"
              alt=""
              src="/button9.svg"
              onClick={onClose}
            />
        </header>
        <div className="p-4 overflow-y-auto">
          <form onSubmit={handleSaveCustomer}>
            {/* First Name Input */}
            <LabelYes
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {/* Last Name Input */}
            <LabelYes
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {/* Email Input */}
            <LabelYes
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Phone Input */}
            <LabelYes
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {/* Street Address Input */}
            <LabelYes
              label="Street Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            {/* City Input */}
            <LabelNo
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {/* State / Province Input */}
            <LabelNo
              placeholder="State / Province"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            {/* Zip Code Input */}
            <LabelNo
              placeholder="Zip Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            {/* Form Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <DefaultButton
                buttonText="Cancel"
                onClick={onClose}
              />
              <DefaultButton
                buttonText="Save Customer"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCustomer;
