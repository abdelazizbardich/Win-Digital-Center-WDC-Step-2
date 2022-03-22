package com.example.demo.controllers;

import com.example.demo.models.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @GetMapping("/")
    public List<User> getAll(){
        return List.of(
                new User(),
                new User(),
                new User(),
                new User(),
                new User(),
                new User()
        );
    }

    @GetMapping("/find/{id}")
    public User find(@PathVariable("id") Long id){
        User user = new User();
        user.setUserId(id);
        return user;
    }

    @PostMapping("/update/{id}")
    public User update(@RequestBody User user,@PathVariable("id") Long id){
        System.out.println("id: "+id);
        return user;
    }

    @PostMapping("/add")
    public User store(@RequestBody User user){
        return user;
    }

    @PostMapping("/delete/{id}")
    public String delete(@PathVariable("id") long id){
        return null;
    }

    @PostMapping("/login")
    public User login(@RequestBody User user){
        return user;
    }

    @PostMapping("/password/reset")
    public User resetPassword(@RequestBody User user){
        return user;
    }
}
