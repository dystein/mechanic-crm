package com.mechanicshop.crm.model;

// Importing Jakarta Persistence API annotations for ORM (Object-Relational Mapping)
import jakarta.persistence.*;

// Declares this class as an entity to be managed by JPA in the context of ORM
@Entity
// Specifies the table in the database that this entity will be mapped to
@Table(name = "vehicles")
public class Vehicle {

    // Marks this field as the primary key of the entity
    @Id
    // Configures the way the primary key is generated automatically by the database
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long VehicleId;

    // Specifies these fields as columns in the table, with a constraint that they cannot be null
    @Column(nullable = false)
    private String Make;

    @Column(nullable = false)
    private String Model;

    @Column(nullable = false)
    private Integer year;

    // This field can be null, thus doesn't have the nullable = false constraint
    @Column
    private Integer Mileage;

    // Specifies that the licensePlate column must be unique and not null
    @Column(nullable = false, unique = true)
    private String LicensePlate;

    // A large text field for additional notes about the vehicle
    @Column(length = 65535, columnDefinition = "TEXT")
    private String AdditionalNotes;

    // Establishes a many-to-one relationship between vehicles and a customer
    // FetchType.LAZY indicates that the customer associated with a vehicle is loaded on demand
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customerID") // Specifies the foreign key column in the vehicles table
    private Customer customer;

    // Default no-argument constructor required by JPA
    public Vehicle() {
    }

    // Getters and setters for all fields to access and modify the vehicle's properties
    public Long getVehicleId() {
        return VehicleId;
    }

    public String getMake() {
        return Make;
    }

    public String getModel() {
        return Model;
    }

    public Integer getYear() {
        return year;
    }

    public Integer getMileage() {
        return Mileage;
    }

    public String getLicensePlate() {
        return LicensePlate;
    }

    public String getAdditionalNotes() {
        return AdditionalNotes;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setVehicleId(Long vehicleId) {
        this.VehicleId = vehicleId;
    }

    public void setMake(String make) {
        this.Make = make;
    }

    public void setModel(String model) {
        this.Model = model;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public void setMileage(Integer mileage) {
        this.Mileage = mileage;
    }

    public void setLicensePlate(String licensePlate) {
        this.LicensePlate = licensePlate;
    }

    public void setAdditionalNotes(String additionalNotes) {
        this.AdditionalNotes = additionalNotes;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
