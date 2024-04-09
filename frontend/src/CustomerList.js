import React, { useEffect, useState } from 'react';
import { fetchCustomers } from './api'; // Make sure the path is correct

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const data = await fetchCustomers();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    getCustomers();
  }, []);

  // Here, you'll render your customer data
  // For example, you might map over the customers array to display it
  // ... (other parts of CustomerList component)

  return (
    <div>
      <h1>Customer List</h1>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              {customer.name} - {customer.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No customers found.</p>
      )}
    </div>
  );

};

export default CustomerList;
