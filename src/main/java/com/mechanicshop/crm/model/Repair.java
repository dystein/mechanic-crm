package com.mechanicshop.crm.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
//import java.util.Date;

@Entity
@Table(name = "repairs")
public class Repair {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "repairID")
    private Long repairId;

    @Column(name = "description", length = 65535, columnDefinition = "TEXT")
    private String description;

    @Column(name = "startDate")
    @Temporal(TemporalType.DATE)
    private LocalDate startDate;

    @Column(name = "endDate")
    @Temporal(TemporalType.DATE)
    private LocalDate endDate;

    @Column(name = "cost", nullable = false)
    private BigDecimal cost;

    @Column(name = "status", nullable = false, length = 50)
    private String status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicleID") // Updated to uppercase as per database schema
    private Vehicle vehicle;

    public Repair() {
    }

    public Long getRepairId() {
        return repairId;
    }

    public void setRepairId(Long repairId) {
        this.repairId = repairId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}
