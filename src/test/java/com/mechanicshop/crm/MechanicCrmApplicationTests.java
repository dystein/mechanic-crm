package com.mechanicshop.crm;

import com.mechanicshop.crm.model.Customer;
import com.mechanicshop.crm.repository.CustomerRepository;
import com.mechanicshop.crm.service.CustomerService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class CustomerServiceTest {

	@Mock
	private CustomerRepository customerRepository;

	@InjectMocks
	private CustomerService customerService;

	@Test
	void saveCustomer() {
		Customer customer = new Customer(); // assuming a constructor exists
		when(customerRepository.save(any(Customer.class))).thenReturn(customer);

		Customer savedCustomer = customerService.saveCustomer(new Customer());
		assertNotNull(savedCustomer);
		verify(customerRepository).save(any(Customer.class));
	}

	// other tests...
}
