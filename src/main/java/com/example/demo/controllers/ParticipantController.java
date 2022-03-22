package com.example.demo.controllers;


import com.example.demo.models.Participant;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/participant")
public class ParticipantController {

    @GetMapping("/")
    public List<Participant> getAll(){
        return List.of(
                new Participant(),
                new Participant(),
                new Participant(),
                new Participant(),
                new Participant(),
                new Participant()
        );
    }

    @GetMapping("/find/{id}")
    public Participant find(@PathVariable("id") Long id){
        Participant participant = new Participant();
        participant.setUserId(id);
        return participant;
    }

    @PostMapping("/update/{id}")
    public Participant update(@RequestBody Participant participant,@PathVariable("id") Long id){
        participant.setUserId(id);
        return participant;
    }

    @PostMapping("/add")
    public Participant store(@RequestBody Participant participant){
        return participant;
    }

    @PostMapping("/login")
    public Boolean login(@RequestBody Participant participant){
        if(!(participant.getLogin().isBlank() || participant.getPassword().isBlank())){
            return true;
        }
        return false;
    }

    @PostMapping("/password/reset")
    public Boolean resetPassword(@RequestBody Participant participant){
        if(participant.getLogin().isBlank())
            return false;
        if(participant.getPassword().isBlank() || participant.getNewPassword().isBlank())
            return false;
        if (!participant.getPassword().equals(participant.getNewPassword()))
            return false;
        return true;
    }
}
