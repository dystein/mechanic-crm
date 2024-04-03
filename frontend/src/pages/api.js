import axios from 'axios';

const API_BASE_URL = 'https://mechanicshopcrm-fff7703161a3.herokuapp.com/';

export const fetchCustomers = async () => {
  const response = await axios.get(`${API_BASE_URL}/customers`);
  return response.data;
};


export const fetchVehicles = async () => {
  const response = await axios.get(`${API_BASE_URL}/vehicles`);
  return response.data;
};
// You can add more functions here for other operations, like:
// export const addCustomer = async (customer) => { ... }
// export const deleteCustomer = async (id) => { ... }
// etc.
