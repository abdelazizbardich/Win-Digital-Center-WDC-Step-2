package com.example.demo.Services;

import com.example.demo.Repositories.ParticipantRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ParticipantService {

    private final ParticipantRepository participantRepository;

    @Autowired
    public ParticipantService(ParticipantRepository participantRepository) {
        this.participantRepository = participantRepository;
    }
}
