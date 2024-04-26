package com.mechanicshop.crm.model;

import com.mechanicshop.crm.model.Vehicle;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class VehicleTest {

    @Test
    void testVehicleGettersAndSetters() {
        // Create a vehicle object and set its properties
        Vehicle vehicle = new Vehicle();
        vehicle.setVehicleId(1L);
        vehicle.setMake("Toyota");
        vehicle.setModel("Camry");
        vehicle.setYear(2020);
        vehicle.setMileage(50000);
        vehicle.setLicensePlate("XYZ123");
        vehicle.setAdditionalNotes("Regular maintenance.");
        vehicle.setState("NY");

        // Assert that the getters return the correct values set by the setters
        assertEquals(1L, vehicle.getVehicleId());
        assertEquals("Toyota", vehicle.getMake());
        assertEquals("Camry", vehicle.getModel());
        assertEquals(Integer.valueOf(2020), vehicle.getYear());
        assertEquals(Integer.valueOf(50000), vehicle.getMileage());
        assertEquals("XYZ123", vehicle.getLicensePlate());
        assertEquals("Regular maintenance.", vehicle.getAdditionalNotes());
        assertEquals("NY", vehicle.getState());

        // Output success message
        System.out.println("VehicleTest: All assertions passed.");
    }
}
