package com.mechanicshop.crm.service;

import com.mechanicshop.crm.model.Repair;
import com.mechanicshop.crm.model.Vehicle;
import com.mechanicshop.crm.repository.RepairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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
        repair.setEndDate(repairDetails.getEndDate());  // Make sure to update endDate if it's being changed
        return repairRepository.save(repair);
    }

    // Deletes a Repair entity by its ID
    public void deleteRepair(Long id) {
        repairRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public RepairWithVehicleDTO findLatestRepairWithVehicle() {
        // Assuming that you want only one result with the latest start date and null end date.
        // The PageRequest of size one will take care of that.
        List<Repair> repairs = repairRepository.findLatestRepairWithNoEndDate(PageRequest.of(0, 1));

        // If no repairs found, throw an exception
        if (repairs.isEmpty()) {
            throw new RuntimeException("No repairs found");
        }

        // Get the first repair from the list, which should be the latest one due to the ordering in the repository method
        Repair repair = repairs.get(0);

        Vehicle vehicle = repair.getVehicle();

        // Map to DTO
        RepairWithVehicleDTO dto = new RepairWithVehicleDTO();
        dto.setRepairId(repair.getRepairId());
        dto.setDescription(repair.getDescription());
        dto.setStartDate(repair.getStartDate());
        dto.setCost(repair.getCost());
        dto.setStatus(repair.getStatus());

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
