package com.mechanicshop.crm.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "repairs")
public class Repair {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long repairId;

    @Column(length = 65535, columnDefinition = "TEXT")
    private String description;

    @Column
    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Column
    @Temporal(TemporalType.DATE)
    private Date endDate;

    @Column(nullable = false)
    private BigDecimal cost;

    @Column(nullable = false, length = 50)
    private String status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicleId")
    private Vehicle vehicle;

    // Constructors
    public Repair() {
    }

    // Getters
    public Long getRepairId() {
        return repairId;
    }

    public String getDescription() {
        return description;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public String getStatus() {
        return status;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    // Setters
    public void setRepairId(Long repairId) {
        this.repairId = repairId;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}
