package com.mechanicshop.crm.model;

import com.mechanicshop.crm.model.Customer;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CustomerTest {

    @Test
    void testCustomerGettersAndSetters() {
        // Set up a customer object and initialize its attributes
        Customer customer = new Customer();
        customer.setCustomerid(1L);
        customer.setFirstName("John");
        customer.setLastName("Doe");
        customer.setPhone("1234567890");
        customer.setEmail("john.doe@example.com");
        customer.setAddress("123 Main St");

        // Validate that each attribute is correctly retrieved by the corresponding getter
        assertEquals(1L, customer.getCustomerid());
        assertEquals("John", customer.getFirstName());
        assertEquals("Doe", customer.getLastName());
        assertEquals("1234567890", customer.getPhone());
        assertEquals("john.doe@example.com", customer.getEmail());
        assertEquals("123 Main St", customer.getAddress());

        // Output success message
        System.out.println("CustomerTest: All assertions passed.");
    }
}
