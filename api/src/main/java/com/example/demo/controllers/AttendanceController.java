package com.example.demo.controllers;

import com.example.demo.Services.ParticipateService;
import com.example.demo.models.Participate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {

    private ParticipateService participateService;

    @Autowired
    public AttendanceController(ParticipateService participateService) {
        this.participateService = participateService;
    }

    @GetMapping("/")
    public List<Participate> getAll(){
        return participateService.getAll();
    }

    @GetMapping("/find/{id}")
    public Participate find(@PathVariable("id") Long id){
        return participateService.get(id);
    }

    @PutMapping("/update/{id}")
    public Participate update(@RequestBody Participate participate,@PathVariable("id") Long id){
        participate.setParticipateId(id);
        return participateService.update(participate);
    }

    @PostMapping("/add")
    public Participate store(@RequestBody Participate participate){
        return participateService.add(participate);
    }

    @DeleteMapping("/delete")
    public Boolean delete(Participate participate){
        return participateService.delete(participate);
    }

}
