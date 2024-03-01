package com.mechanicshop.crm.repository;

// Import statements for required classes and interfaces

import com.mechanicshop.crm.model.Customer; // Importing the Customer entity class
import org.springframework.data.jpa.repository.JpaRepository; // Spring Data JPA repository interface
import org.springframework.stereotype.Repository; // Annotation to indicate this is a repository component

import java.util.List; // Import for using the List collection

// Annotation to indicate this interface is a repository component in the Spring context
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // This method declaration provides a way to search for customers by first name, last name, or phone number.
    // It extends JpaRepository, providing generic CRUD operations on the Customer entity.
    // The method takes three String parameters and returns a list of Customer objects that match the criteria.
    List<Customer> findByNameContainingOrPhoneContaining(String name, String phoneNumber);
}
