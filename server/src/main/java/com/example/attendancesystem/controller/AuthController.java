package com.example.attendancesystem.controller;

import com.example.attendancesystem.model.User;
import com.example.attendancesystem.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.Properties;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class AuthController {

    private final User user1 = new User("admin", "password");

    @Autowired
    private JwtUtil jwtUtil;


    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User user)  {

        if (user == null || !user1.getPassword().equals(user.getPassword())) {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
        else{
        final String jwt = jwtUtil.generateToken(user.getUserName());
            Properties properties = new Properties();
            properties.setProperty("token",jwt );

            return ResponseEntity.ok(properties);}
    }
}
