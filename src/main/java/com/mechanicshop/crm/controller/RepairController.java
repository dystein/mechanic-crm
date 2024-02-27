package com.mechanicshop.crm.controller;

import com.mechanicshop.crm.model.Repair;
import com.mechanicshop.crm.service.RepairService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/repairs")
public class RepairController {

    private final RepairService repairService;

    @Autowired
    public RepairController(RepairService repairService) {
        this.repairService = repairService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Repair addRepair(@RequestBody Repair repair) {
        return repairService.saveRepair(repair);
    }

    @GetMapping
    public List<Repair> getAllRepairs() {
        return repairService.getAllRepairs();
    }

    @GetMapping("/{id}")
    public Repair getRepairById(@PathVariable Long id) {
        return repairService.getRepairById(id).orElseThrow(() -> new RuntimeException("Repair not found"));
    }

    @PutMapping("/{id}")
    public Repair updateRepair(@PathVariable Long id, @RequestBody Repair repair) {
        return repairService.updateRepair(id, repair);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteRepair(@PathVariable Long id) {
        repairService.deleteRepair(id);
    }

    // Add method for searching and adding services to a vehicle's information if necessary
}
