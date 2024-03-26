package com.mechanicshop.crm.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String username;

    // Password will be stored as a hashed value, not plain text
    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String role; // "customer" or "mechanic"

    public String getUsername() {
    }

    public Object getPassword() {
    }

    // Getters, Setters, and Constructors (as needed)
}
