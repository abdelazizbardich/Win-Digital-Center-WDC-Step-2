package com.example.demo.controllers;

import com.example.demo.Services.UserService;
import com.example.demo.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private UserService userService;

    @Autowired
    public AdminController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public List<User> getAll(){
        return userService.getAll();
    }

    @GetMapping("/find/{id}")
    public User find(@PathVariable("id") Long id){
        return userService.get(id);
    }

    @PutMapping("/update/{id}")
    public User update(@RequestBody User user,@PathVariable("id") Long id){
        user.setUserId(id);
        return userService.update(user);
    }

    @PostMapping("/add")
    public User store(@RequestBody User user){
        return userService.add(user);
    }

    @DeleteMapping("/delete/{id}")
    public boolean delete(@RequestBody User user){
        return userService.delete(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user){
        return userService.login(user);
    }

    @PostMapping("/password/reset")
    public User resetPassword(@RequestBody User user){
        return userService.resetPassword(user);
    }
}
