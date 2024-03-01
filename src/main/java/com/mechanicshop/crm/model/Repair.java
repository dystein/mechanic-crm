// Defines the package where this class belongs
package com.mechanicshop.crm.model;

// Import statements for JPA annotations and Java utility classes
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

// Annotation to declare this class as an entity for JPA, mapping it to a database table
@Entity
// Specifies the name of the table in the database that this entity maps to
@Table(name = "repairs")
public class Repair {

    // Primary key of the entity, auto-generated with the database's identity column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long repairId;

    // A text column in the database to store the repair description, capable of storing large text
    @Column(length = 65535, columnDefinition = "TEXT")
    private String Description;

    // Stores the start date of the repair, using the DATE type in the database
    @Column
    @Temporal(TemporalType.DATE)
    private Date StartDate;

    // Stores the end date of the repair, similar to startDate
    @Column
    @Temporal(TemporalType.DATE)
    private Date EndDate;

    // A non-nullable column to store the cost of the repair with precise decimal numbers
    @Column(nullable = false)
    private BigDecimal cost;

    // A non-nullable string column to store the status of the repair, limited to 50 characters
    @Column(nullable = false, length = 50)
    private String Status;

    // Establishes a many-to-one relationship with the Vehicle entity
    // Indicates that each repair is associated with one vehicle
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicleId") // Foreign key column in the repairs table
    private Vehicle vehicle;

    // Default constructor required by JPA
    public Repair() {
    }

    // Getter methods to retrieve the values of the entity's properties
    public Long getRepairId() {
        return repairId;
    }

    public String getDescription() {
        return Description;
    }

    public Date getStartDate() {
        return StartDate;
    }

    public Date getEndDate() {
        return EndDate;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public String getStatus() {
        return Status;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    // Setter methods to set the values of the entity's properties
    public void setRepairId(Long repairId) {
        this.repairId = repairId;
    }

    public void setDescription(String description) {
        this.Description = description;
    }

    public void setStartDate(Date startDate) {
        this.StartDate = startDate;
    }

    public void setEndDate(Date endDate) {
        this.EndDate = endDate;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public void setStatus(String status) {
        this.Status = status;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}
