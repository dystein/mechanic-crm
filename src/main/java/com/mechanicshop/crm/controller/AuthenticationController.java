package com.mechanicshop.crm.controller;

import com.mechanicshop.crm.model.User;
import com.mechanicshop.crm.repository.UserRepository;
import com.mechanicshop.crm.service.BcryptService;
import com.mechanicshop.crm.service.TokenService; // Placeholder for future token generation
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BcryptService bcryptService;

    @Autowired
    private TokenService tokenService; // Placeholder for future token generation

    @PostMapping("/login")
    public String login(@RequestBody User loginCredentials) {
        // Find user by username
        User user = userRepository.findByUsername(loginCredentials.getUsername());

        // Validate password using Bcrypt
        if (user != null && bcryptService.matches(loginCredentials.getPassword(), user.getPassword())) {
            // Successful login, generate token (for now, return a simple message)
            return "Login Successful! Token: " + tokenService.generateToken(user); // Replace with actual token generation logic
        } else {
            return "Invalid username or password";
        }
    }
}
