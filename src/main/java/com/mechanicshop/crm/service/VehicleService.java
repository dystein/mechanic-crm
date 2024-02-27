package com.mechanicshop.crm.service;

import com.mechanicshop.crm.model.Vehicle;
import com.mechanicshop.crm.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class VehicleService {

    private final VehicleRepository vehicleRepository;

    // Constructor for dependency injection of VehicleRepository
    @Autowired
    public VehicleService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    // Saves a vehicle entity to the database
    public Vehicle saveVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    // Retrieves all vehicles from the database
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    // Retrieves a vehicle by its ID
    public Optional<Vehicle> getVehicleById(Long id) {
        return vehicleRepository.findById(id);
    }

    // Updates a vehicle entity with new details
    public Vehicle updateVehicle(Long id, Vehicle vehicleDetails) {
        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle not found for this id :: " + id));
        vehicle.setLicensePlate(vehicleDetails.getLicensePlate());
        vehicle.setMake(vehicleDetails.getMake());
        vehicle.setModel(vehicleDetails.getModel());
        // Update other fields as needed
        return vehicleRepository.save(vehicle);
    }

    // Deletes a vehicle by its ID
    public void deleteVehicle(Long id) {
        Vehicle vehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle not found for this id :: " + id));
        vehicleRepository.delete(vehicle);
    }

    // Searches vehicles by license plate, make, and model
    public List<Vehicle> searchVehicles(String licensePlate, String make, String model) {
        // Initialize an empty list to hold the results
        List<Vehicle> results = new ArrayList<>();

        // Search by license plate if provided
        if (licensePlate != null && !licensePlate.isBlank()) {
            results.addAll(vehicleRepository.findByLicensePlateContaining(licensePlate));
        }

        // Search by make if provided
        if (make != null && !make.isBlank()) {
            results.addAll(vehicleRepository.findByMake(make));
        }

        // Search by model if provided
        if (model != null && !model.isBlank()) {
            results.addAll(vehicleRepository.findByModel(model));
        }

        // Remove duplicate entries from results
        return results.stream().distinct().collect(Collectors.toList());
    }
}
