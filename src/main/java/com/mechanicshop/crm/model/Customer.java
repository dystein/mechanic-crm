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

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<Vehicle> vehicles = new HashSet<>();

    // Constructors
    public Customer() {
    }

    // Getters
    public Long getCustomerId() {
        return customerId;
    }

    public String getName() {
        return name;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getAddress() {
        return address;
    }

    public Set<Vehicle> getVehicles() {
        return vehicles;
    }

    // Setters
    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setVehicles(Set<Vehicle> vehicles) {
        this.vehicles.forEach(vehicle -> vehicle.setCustomer(this));
        this.vehicles = vehicles;
    }

    // Utility methods if needed, like adding a vehicle to the customer
    public void addVehicle(Vehicle vehicle) {
        vehicle.setCustomer(this);
        this.vehicles.add(vehicle);
    }

    public void removeVehicle(Vehicle vehicle) {
        vehicle.setCustomer(null);
        this.vehicles.remove(vehicle);
    }
}
