import React, { useState, FunctionComponent, ChangeEvent } from "react";
import LabelYes from "./LabelYes"; // Ensure this component accepts 'label', 'value', 'onChange', and 'name' props.
import LabelNo from "./LabelNo"; // Ensure this component accepts 'placeholder', 'value', 'onChange', and 'name' props.
import DefaultButton from "./DefaultButton"; // Ensure this component accepts 'buttonText', 'onClick', and 'type' props.

interface ChoicePopupProps {
  onClose: () => void;
}

const AddNewCustomer: FunctionComponent<ChoicePopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveCustomer = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const customerData = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      address: `${formData.street}, ${formData.city}, ${formData.state}, ${formData.zip}`
    };

    const username = 'admin'; // Replace with actual username
    const password = 'password'; // Replace with actual password
    const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;

    try {
      const response = await fetch('https://mechanicshopcrm-fff7703161a3.herokuapp.com/customers', {
        method: 'POST',
        headers: {
          'Authorization': basicAuth,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(customerData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
      onClose(); // Close the form on successful save
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
            <LabelYes label="First Name" value={formData.firstname} onChange={handleInputChange} name="firstname" />
            <LabelYes label="Last Name" value={formData.lastname} onChange={handleInputChange} name="lastname" />
            <LabelYes label="Email" value={formData.email} onChange={handleInputChange} name="email" />
            <LabelYes label="Phone" value={formData.phone} onChange={handleInputChange} name="phone" />
            <LabelYes label="Street Address" value={formData.street} onChange={handleInputChange} name="street" />
            <LabelNo placeholder="City" value={formData.city} onChange={handleInputChange} name="city" />
            <LabelNo placeholder="State / Province" value={formData.state} onChange={handleInputChange} name="state" />
            <LabelNo placeholder="Zip Code" value={formData.zip} onChange={handleInputChange} name="zip" />
            <div className="flex justify-end gap-2 mt-4">
              <DefaultButton buttonText="Cancel" onClick={onClose} />
              <DefaultButton buttonText="Save Customer" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCustomer;
