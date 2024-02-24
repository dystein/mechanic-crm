package com.mechanicshop.crm.model;

import jakarta.persistence.*;

@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vehicleId;

    @Column(nullable = false)
    private String make;

    @Column(nullable = false)
    private String model;

    @Column(nullable = false)
    private Integer year;

    @Column
    private Integer mileage;

    @Column(nullable = false, unique = true)
    private String licensePlate;

    @Column(length = 65535, columnDefinition = "TEXT")
    private String additionalNotes;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customerID")
    private Customer customer;

    //Getters and setters

}
