package com.example.demo.Services;

import com.example.demo.Repositories.ParticipateRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ParticipateService {

    private final ParticipateRepository participateRepository;

    @Autowired
    public ParticipateService(ParticipateRepository participateRepository) {
        this.participateRepository = participateRepository;
    }
}
