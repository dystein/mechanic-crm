package com.mechanicshop.crm.repository;

import com.mechanicshop.crm.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Custom query to search customers by first name, last name, or phone number
    List<Customer> findByFirstNameContainingOrLastNameContainingOrPhoneNumberContaining(String firstName, String lastName, String phoneNumber);
}
