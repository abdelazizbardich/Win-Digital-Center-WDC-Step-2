package com.example.demo.controllers;


import com.example.demo.Services.ParticipantService;
import com.example.demo.Services.ParticipateService;
import com.example.demo.models.Participant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/participant")
public class ParticipantController {

    private ParticipantService participantService;

    @Autowired
    public ParticipantController(ParticipantService participantService) {
        this.participantService = participantService;
    }

    @GetMapping("/")
    public List<Participant> getAll(){
        return participantService.getAll();
    }

    @GetMapping("/find/{id}")
    public Participant find(@PathVariable("id") Long id){
        return participantService.get(id);
    }

    @PutMapping("/update/{id}")
    public Participant update(@RequestBody Participant participant,@PathVariable("id") Long id){
        participant.setUserId(id);
        return participantService.update(participant);
    }

    @PostMapping("/add")
    public Participant store(@RequestBody Participant participant){
        return participantService.add(participant);
    }

    @DeleteMapping("/delete")
    public Boolean delete(@RequestBody Participant participant){
        return participantService.delete(participant);
    }

    @PostMapping("/login")
    public Participant login(@RequestBody Participant participant){
        return participantService.login(participant);
    }

    @PostMapping("/password/reset")
    public Participant resetPassword(@RequestBody Participant participant){
        return participantService.resetPassword(participant);
    }
}
