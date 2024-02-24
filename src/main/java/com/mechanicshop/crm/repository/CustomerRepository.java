package com.mechanicshop.crm.repository;

import com.mechanicshop.crm.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Additional custom queries can be defined here
}
