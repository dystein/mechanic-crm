package com.mechanicshop.crm.service;

// Import statements
import com.mechanicshop.crm.model.Repair;
import com.mechanicshop.crm.model.Vehicle;
import com.mechanicshop.crm.repository.RepairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.PageRequest;
import org.springframework.transaction.annotation.Transactional;

@Service // Marks the class as a Spring service component
public class RepairService {

    private final RepairRepository repairRepository; // Injects RepairRepository

    @Autowired // Autowires the RepairRepository bean
    public RepairService(RepairRepository repairRepository) {
        this.repairRepository = repairRepository;
    }

    // Saves or updates a Repair entity
    public Repair saveRepair(Repair repair) {
        return repairRepository.save(repair);
    }

    // Retrieves all Repair entities
    public List<Repair> getAllRepairs() {
        return repairRepository.findAll();
    }

    // Finds a Repair entity by its ID
    public Optional<Repair> getRepairById(Long id) {
        return repairRepository.findById(id);
    }

    // Updates a Repair entity's details
    public Repair updateRepair(Long id, Repair repairDetails) {
        Repair repair = repairRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Repair not found for this id :: " + id));
        repair.setDescription(repairDetails.getDescription());
        repair.setStatus(repairDetails.getStatus());
        // Additional fields can be updated here as required
        return repairRepository.save(repair);
    }

    // Deletes a Repair entity by its ID
    public void deleteRepair(Long id) {
        Repair repair = repairRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Repair not found for this id :: " + id));
        repairRepository.delete(repair);
    }

    @Transactional(readOnly = true)
    public RepairWithVehicleDTO findLatestRepairWithVehicle() {
        Repair repair = repairRepository.findTopByOrderByStartDateDesc()
                .orElseThrow(() -> new RuntimeException("No repairs found"));

        // Since the method is @Transactional, getVehicle() will successfully initialize the proxy
        Vehicle vehicle = repair.getVehicle();

        // Now map both Repair and Vehicle to RepairWithVehicleDTO
        RepairWithVehicleDTO dto = new RepairWithVehicleDTO();
        dto.setRepairId(repair.getRepairId());
        dto.setDescription(repair.getDescription());
        dto.setStartDate(repair.getStartDate());
        dto.setCost(repair.getCost());
        dto.setStatus(repair.getStatus());

        // Map Vehicle to VehicleDTO
        VehicleDTO vehicleDTO = new VehicleDTO();
        vehicleDTO.setVehicleId(vehicle.getId());
        vehicleDTO.setMake(vehicle.getMake());
        vehicleDTO.setModel(vehicle.getModel());
        vehicleDTO.setYear(vehicle.getYear());
        vehicleDTO.setMileage(vehicle.getMileage());
        vehicleDTO.setState(vehicle.getState());

        dto.setVehicle(vehicleDTO);

        return dto;
    }


}
