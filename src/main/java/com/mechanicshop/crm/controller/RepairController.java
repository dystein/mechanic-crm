package com.mechanicshop.crm.controller;

import com.mechanicshop.crm.model.Repair;
import com.mechanicshop.crm.service.RepairService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.mechanicshop.crm.repository.RepairRepository;

import java.util.List;

// The RestController annotation is used to define a controller and mark that its methods' return values should be bound to the web response body.
@RestController
@CrossOrigin(origins = "http://localhost:3000")
// RequestMapping annotation is used to map HTTP requests to handler methods of MVC and REST controllers.
@RequestMapping("/repairs")
public class RepairController {

    // The RepairService dependency is automatically injected by Spring's dependency injection facilities.
    private final RepairService repairService;

    // Autowired annotation is used to automatically inject the RepairService into this controller.
    @Autowired
    public RepairController(RepairService repairService) {
        this.repairService = repairService;
    }

    // PostMapping annotation is used to map HTTP POST requests onto specific handler methods. Here it's used to create a new repair entry.
    @PostMapping
    // ResponseStatus annotation marks the method with the status code that should be returned. HttpStatus.CREATED corresponds to the 201 status code.
    @ResponseStatus(HttpStatus.CREATED)
    public Repair addRepair(@RequestBody Repair repair) {
        // Calls the saveRepair method of the repair service to save a repair and returns the saved Repair object.
        return repairService.saveRepair(repair);
    }

    // GetMapping annotation is used to map HTTP GET requests onto specific handler methods. Here it's used to retrieve all repair entries.
    @GetMapping
    public List<Repair> getAllRepairs() {
        // Retrieves all repairs by calling the getAllRepairs method of the repair service.
        return repairService.getAllRepairs();
    }

    // GetMapping with a path variable to map HTTP GET requests to retrieve a repair by its ID.
    @GetMapping("/{id}")
    public Repair getRepairById(@PathVariable Long id) {
        // Calls the getRepairById method of the repair service to retrieve a repair. Throws an exception if the repair is not found.
        return repairService.getRepairById(id).orElseThrow(() -> new RuntimeException("Repair not found"));
    }

    @GetMapping("/latest")
    public Repair getLatestRepair(){
        return repairService.findTopByOrderByStartDateDesc()
                .orElseThrow(() -> new RuntimeException("No repairs found"));
    }

    // PutMapping annotation is used to map HTTP PUT requests onto specific handler methods. Here it's used to update an existing repair entry.
    @PutMapping("/{id}")
    public Repair updateRepair(@PathVariable Long id, @RequestBody Repair repair) {
        // Calls the updateRepair method of the repair service to update a repair and returns the updated Repair object.
        return repairService.updateRepair(id, repair);
    }

    // DeleteMapping annotation is used to map HTTP DELETE requests onto specific handler methods. Here it's used to delete a repair entry.
    @DeleteMapping("/{id}")
    // Marks the response status as HttpStatus.NO_CONTENT, which corresponds to the 204 status code indicating that the request was successful but there's no content to return.
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteRepair(@PathVariable Long id) {
        // Calls the deleteRepair method of the repair service to delete a repair.
        repairService.deleteRepair(id);
    }

    @GetMapping("/latest")
    public Repair getLatestRepairWithVehicle() {
        return repairService.findLatestRepairWithVehicle();
    }

    // A placeholder comment indicating where methods for searching and adding services to a vehicle's information might be added in the future.
    // TODO: Implement search functionality and service addition.


}
