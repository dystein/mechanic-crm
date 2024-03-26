package com.mechanicshop.crm.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptService {

    private static BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public static String hashPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public boolean matches(Object password, Object password1) {
    }
}
