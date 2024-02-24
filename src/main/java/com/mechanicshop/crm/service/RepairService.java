package com.mechanicshop.crm.service;

import com.mechanicshop.crm.model.Repair;
import com.mechanicshop.crm.repository.RepairRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepairService {

    private final RepairRepository repairRepository;

    @Autowired
    public RepairService(RepairRepository repairRepository) {
        this.repairRepository = repairRepository;
    }

    public Repair saveRepair(Repair repair) {
        return repairRepository.save(repair);
    }

    public List<Repair> getAllRepairs() {
        return repairRepository.findAll();
    }

    // Add other methods as needed
}
