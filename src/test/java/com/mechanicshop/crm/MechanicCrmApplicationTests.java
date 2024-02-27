package com.mechanicshop.crm;

import com.mechanicshop.crm.model.Customer;
import com.mechanicshop.crm.repository.CustomerRepository;
import com.mechanicshop.crm.service.CustomerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class CustomerServiceTest {

	@Mock
	private CustomerRepository customerRepository;

	@InjectMocks
	private CustomerService customerService;

	private Customer customer;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
		customer = new Customer();
		// Initialize your customer object here
	}

	@Test
	void saveCustomer() {
		when(customerRepository.save(any(Customer.class))).thenReturn(customer);
		Customer created = customerService.saveCustomer(customer);
		assertNotNull(created);
		verify(customerRepository).save(customer);
	}

	@Test
	void getAllCustomers() {
		when(customerRepository.findAll()).thenReturn(List.of(customer));
		List<Customer> customerList = customerService.getAllCustomers();
		assertFalse(customerList.isEmpty());
		verify(customerRepository).findAll();
	}

	@Test
	void getCustomerById() {
		when(customerRepository.findById(anyLong())).thenReturn(Optional.of(customer));
		Optional<Customer> found = customerService.getCustomerById(1L);
		assertTrue(found.isPresent());
		assertEquals(customer, found.get());
		verify(customerRepository).findById(1L);
	}

	@Test
	void updateCustomer() {
		when(customerRepository.findById(anyLong())).thenReturn(Optional.of(customer));
		when(customerRepository.save(any(Customer.class))).thenReturn(customer);
		customer.setName("Updated Name");
		Customer updated = customerService.updateCustomer(1L, customer);
		assertNotNull(updated);
		assertEquals("Updated Name", updated.getName());
		verify(customerRepository).save(customer);
		verify(customerRepository).findById(1L);
	}

	@Test
	void deleteCustomer() {
		when(customerRepository.findById(anyLong())).thenReturn(Optional.of(customer));
		doNothing().when(customerRepository).delete(any(Customer.class));
		customerService.deleteCustomer(1L);
		verify(customerRepository).delete(customer);
	}
}
