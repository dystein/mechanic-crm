package com.mechanicshop.crm.repository;

import com.mechanicshop.crm.model.Repair;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepairRepository extends JpaRepository<Repair, Long> {
    // Here you might add queries to find repairs by status or date range
}
