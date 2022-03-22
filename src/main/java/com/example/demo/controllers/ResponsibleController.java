package com.example.demo.controllers;


import com.example.demo.models.Participant;
import com.example.demo.models.Responsible;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/responsible")
public class ResponsibleController {

    @GetMapping("/")
    public List<Responsible> getAll(){
        return List.of(
                new Responsible(),
                new Responsible(),
                new Responsible(),
                new Responsible(),
                new Responsible(),
                new Responsible(),
                new Responsible(),
                new Responsible()
        );
    }

    @GetMapping("/find/{id}")
    public Responsible find(@PathVariable("id") Long id){
        Responsible responsible = new Responsible();
        responsible.setUserId(id);
        return responsible;
    }

    @PostMapping("/update/{id}")
    public Responsible update(@RequestBody Responsible responsible,@PathVariable("id") Long id){
        responsible.setUserId(id);
        return responsible;
    }

    @PostMapping("/add")
    public Responsible store(@RequestBody Responsible responsible){
        return responsible;
    }

    @PostMapping("/login")
    public Boolean login(@RequestBody Responsible responsible){
        if(!(responsible.getLogin().isBlank() || responsible.getPassword().isBlank())){
            return true;
        }
        return false;
    }

    @PostMapping("/password/reset")
    public Boolean resetPassword(@RequestBody Responsible responsible){
        if(responsible.getLogin().isBlank())
            return false;
        if(responsible.getPassword().isBlank() || responsible.getNewPassword().isBlank())
            return false;
        if (!responsible.getPassword().equals(responsible.getNewPassword()))
            return false;
        return true;
    }
}
