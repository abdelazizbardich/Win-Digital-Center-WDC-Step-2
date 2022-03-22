package com.example.demo.controllers;

import com.example.demo.models.Participate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    @GetMapping("/")
    public List<Participate> getAll(){
        return List.of(
                new Participate(),
                new Participate(),
                new Participate(),
                new Participate(),
                new Participate(),
                new Participate(),
                new Participate()
        );
    }

    @GetMapping("/find/{id}")
    public Participate find(@PathVariable("id") Long id){
        Participate participate = new Participate();
        participate.setParticipateId(id);
        return participate;
    }

    @PostMapping("/update/{id}")
    public Participate update(@RequestBody Participate participate,@PathVariable("id") Long id){
        participate.setParticipateId(id);
        return participate;
    }

    @PostMapping("/add")
    public Participate store(@RequestBody Participate participate){
        return participate;
    }


}
