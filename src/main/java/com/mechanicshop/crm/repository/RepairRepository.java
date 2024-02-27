package com.mechanicshop.crm.repository;

import com.mechanicshop.crm.model.Repair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepairRepository extends JpaRepository<Repair, Long> {
    List<Repair> findByStatus(String status);

    // Method to find repairs by vehicle ID
    List<Repair> findByVehicleId(Long vehicleId);
}
