package com.mechanicshop.crm.model;

import com.mechanicshop.crm.model.Repair;
import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.*;

class RepairTest {

    @Test
    void testRepairGettersAndSetters() {
        Repair repair = new Repair();
        repair.setRepairId(1L);
        repair.setDescription("Fix engine");
        repair.setStartDate(LocalDate.of(2023, 1, 1));
        repair.setEndDate(LocalDate.of(2023, 1, 10));
        repair.setCost(new BigDecimal("499.99"));
        repair.setStatus("Completed");

        assertEquals(1L, repair.getRepairId());
        assertEquals("Fix engine", repair.getDescription());
        assertEquals(LocalDate.of(2023, 1, 1), repair.getStartDate());
        assertEquals(LocalDate.of(2023, 1, 10), repair.getEndDate());
        assertEquals(0, new BigDecimal("499.99").compareTo(repair.getCost()));
        assertEquals("Completed", repair.getStatus());
    }
}
