package com.example.demo.Services;

import com.example.demo.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
