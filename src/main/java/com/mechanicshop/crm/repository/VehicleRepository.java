package com.mechanicshop.crm.repository;

import com.mechanicshop.crm.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    Optional<Vehicle> findByLicensePlate(String licensePlate);

    List<Vehicle> findByMake(String make);

    List<Vehicle> findByModel(String model);

    List<Vehicle> findByMakeAndModel(String make, String model);

    // Added method for searching vehicles by partial license plate match
    List<Vehicle> findByLicensePlateContaining(String licensePlate);
}
