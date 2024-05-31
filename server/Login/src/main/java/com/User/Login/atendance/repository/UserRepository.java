package com.example.attendance.repository;

import com.example.attendance.entities.User;
import java.util.HashMap;
import java.util.Map;

public class UserRepository {
    private Map<String, User> users = new HashMap<>();

    public UserRepository() {
        // Preload a user for simplicity
        users.put("user", new User("user", "password"));
    }

    public User findByUsername(String username) {
        return users.get(username);
    }
}
