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
      className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="rounded-xl bg-white w-3/4 max-w-2xl overflow-hidden flex flex-col">
        <header className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Add New Customer</h2>
          <button onClick={onClose}>X</button>
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
