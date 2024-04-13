package com.mechanicshop.crm.service;
public class VehicleDTO {

    private Long vehicleId;
    private String make;
    private String model;
    private Integer year;
    private Integer mileage;
    private String state;

    public VehicleDTO() {
        // Default constructor
    }

    // Additional constructors can be added if needed

    // Getters and setters for each property
    public Long getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(Long vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMileage() {
        return mileage;
    }

    public void setMileage(Integer mileage) {
        this.mileage = mileage;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    // Implement toString(), hashCode(), equals() as needed
}

