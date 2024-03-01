package com.mechanicshop.crm.model;

// Necessary imports for JPA annotations and Java utilities
import jakarta.persistence.*;
import java.util.Set;
import java.util.HashSet;

// Marks this class as a JPA entity, meaning it will be mapped to a table in a database
@Entity
// Specifies the table name in the database that this entity will be mapped to
@Table(name = "customers")
public class Customer {
    // Specifies the primary key of the entity with auto-increment strategy
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long CustomerID;

    // Marks the field as a column in the table with a not-null constraint
    @Column(nullable = false)
    private String Name;

    // Similar to name, marks as a column that cannot be null
    @Column(nullable = false)
    private String Phone;

    // Marks the email as a unique column, ensuring no two customers have the same email
    @Column(nullable = false, unique = true)
    private String Email;

    // Specifies a TEXT type column for longer strings, also with a not-null constraint
    @Column(nullable = false, length = 65535, columnDefinition = "TEXT")
    private String Address;

    // Establishes a one-to-many relationship with the Vehicle entity
    // Cascade type ALL means persist, merge, remove, and refresh operations will cascade from customer to vehicles
    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private Set<Vehicle> vehicles = new HashSet<>();

    // Default constructor required by JPA
    public Customer() {
    }

    // Getters and setters for all the fields to access and modify the entity's properties
    public Long getCustomerID() {
        return CustomerID;
    }

    public String getName() {
        return Name;
    }

    public String getPhone() {
        return Phone;
    }

    public String getEmail() {
        return Email;
    }

    public String getAddress() {
        return Address;
    }

    public Set<Vehicle> getVehicles() {
        return vehicles;
    }

    public void setCustomerID(Long customerID) {
        this.CustomerID = customerID;
    }

    public void setName(String name) {
        this.Name = name;
    }

    public void setPhone(String phone) {
        this.Phone = phone;
    }

    public void setEmail(String email) {
        this.Email = email;
    }

    public void setAddress(String address) {
        this.Address = address;
    }

    // When setting vehicles, ensure each vehicle is associated back to this customer
    public void setVehicles(Set<Vehicle> vehicles) {
        vehicles.forEach(vehicle -> vehicle.setCustomer(this));
        this.vehicles = vehicles;
    }

    // Utility method to add a vehicle to the customer's set of vehicles
    // It sets the vehicle's customer to this customer and adds the vehicle to the set
    public void addVehicle(Vehicle vehicle) {
        vehicle.setCustomer(this);
        this.vehicles.add(vehicle);
    }

    // Utility method to remove a vehicle from the customer's set of vehicles
    // It nullifies the vehicle's reference to this customer and removes the vehicle from the set
    public void removeVehicle(Vehicle vehicle) {
        vehicle.setCustomer(null);
        this.vehicles.remove(vehicle);
    }
}
