package com.example.demo.controllers;


import com.example.demo.Services.ResponsibleService;
import com.example.demo.models.Participant;
import com.example.demo.models.Responsible;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/responsible")
public class ResponsibleController {

    private ResponsibleService responsibleService;

    @Autowired
    public ResponsibleController(ResponsibleService responsibleService) {
        this.responsibleService = responsibleService;
    }

    @GetMapping("/")
    public List<Responsible> getAll(){
        return responsibleService.getAll();
    }

    @GetMapping("/find/{id}")
    public Responsible find(@PathVariable("id") Long id){
        return responsibleService.get(id);
    }

    @PutMapping("/update/{id}")
    public Responsible update(@RequestBody Responsible responsible,@PathVariable("id") Long id){
        responsible.setUserId(id);
        return responsibleService.update(responsible);
    }

    @PostMapping("/add")
    public Responsible store(@RequestBody Responsible responsible){
        return responsibleService.add(responsible);
    }

    @DeleteMapping("/delete")
    public Boolean delete(@RequestBody  Responsible responsible){
        return responsibleService.delete(responsible);
    }

    @PostMapping("/login")
    public Responsible login(@RequestBody Responsible responsible){
        return responsibleService.login(responsible);
    }

    @PostMapping("/password/reset")
    public Responsible resetPassword(@RequestBody Responsible responsible){
        return responsibleService.resetPassword(responsible);
    }
}
