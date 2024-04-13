package com.mechanicshop.crm.repository;

// Required imports

import com.mechanicshop.crm.model.Repair; // Importing the Repair entity
import org.springframework.data.jpa.repository.JpaRepository; // Spring Data JPA repository interface
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository; // Annotation to denote a repository component
import java.util.List; // Import for using the List collection
import java.util.Optional;

@Repository // Marks the interface as a repository component in the Spring context
public interface RepairRepository extends JpaRepository<Repair, Long> {
    @Query("SELECT r FROM Repair r ORDER BY r.startDate DESC")
    Optional<Repair> findTopByOrderByStartDateDesc();
    // Method to find repairs by their status

}