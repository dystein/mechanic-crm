package com.mechanicshop.crm.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Disabling CSRF for non-browser clients/APIs
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/customers/**").permitAll() // Allow public access to /customers
                        .anyRequest().authenticated() // Require authentication for any other request
                )
                .httpBasic(); // Enable HTTP Basic Authentication

        return http.build();
    }
}