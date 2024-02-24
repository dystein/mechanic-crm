package com.mechanicshop.crm.repository;

import com.mechanicshop.crm.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    // Custom queries based on vehicle properties can be defined here
}
