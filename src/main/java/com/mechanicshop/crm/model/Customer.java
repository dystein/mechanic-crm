package com.mechanicshop.crm.model;

import jakarta.persistence.*;
import java.util.Set;
import java.util.HashSet;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, length = 65535, columnDefinition = "TEXT")
    private String address;

    // Assuming there is one to many relationships with vehicles
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<Vehicle> vehicles = new HashSet<>();

    //Getters and setters
}
