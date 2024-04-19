import React, { useState, FunctionComponent } from "react";
import LabelYes from "./LabelYes"; // Make sure this component accepts 'label', 'value', and 'onChange' props.
import LabelNo from "./LabelNo"; // Make sure this component accepts 'placeholder', 'value', and 'onChange' props.
import DefaultButton from "./DefaultButton"; // Make sure this component accepts 'buttonText', 'onClick', and 'type' props.

interface ChoicePopupProps {
  onClose: () => void;
}

const AddNewCustomer: FunctionComponent<ChoicePopupProps> = ({ onClose }) => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [street, setstreet] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [zip, setzip] = useState('');

  const handleSaveCustomer = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const customerData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      address: `${street}, ${city}, ${state}, ${zip}` // Assuming your backend expects a single string for the address
    };

    const username = 'admin'; // Replace with actual username
    const password = 'password'; // Replace with actual password
    const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;

    try {
      const response = await fetch('https://mechanicshopcrm-fff7703161a3.herokuapp.com/customers', {
        method: 'POST',
        headers: {
          'Authorization': basicAuth,
          'Content-Type': 'application/json', // Ensure that the Content-Type header is application/json
          // Authorization header should be included if your endpoint requires authentication
        },
        body: JSON.stringify(customerData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      onClose(); // Close the form on successful save
      // Reset form state here if needed
    } catch (error) {
      console.error("Error saving customer:", error);
    }
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
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
            {/* Last Name Input */}
            <LabelYes
              label="Last Name"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
            {/* Email Input */}
            <LabelYes
              label="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            {/* Phone Input */}
            <LabelYes
              label="Phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
            {/* Street Address Input */}
            <LabelYes
              label="Street Address"
              value={street}
              onChange={(e) => setstreet(e.target.value)}
            />
            {/* City Input */}
            <LabelNo
              placeholder="City"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
            {/* State / Province Input */}
            <LabelNo
              placeholder="State / Province"
              value={state}
              onChange={(e) => setstate(e.target.value)}
            />
            {/* Zip Code Input */}
            <LabelNo
              placeholder="Zip Code"
              value={zip}
              onChange={(e) => setzip(e.target.value)}
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
