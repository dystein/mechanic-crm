package com.mechanicshop.crm.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((authz) -> authz
                        .requestMatchers("/customers/**").permitAll()
                        .anyRequest().authenticated())
                .httpBasic()
                .and()
                .formLogin()
                .and()
                .csrf().disable(); // Only disable CSRF if you're sure about the security implications

        return http.build();
    }
}
