package com.example.demo.Services;

import com.example.demo.Repositories.ParticipantRepository;
import com.example.demo.models.Participant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParticipantService implements Services<Participant>{

    private final ParticipantRepository participantRepository;

    @Autowired
    public ParticipantService(ParticipantRepository participantRepository) {
        this.participantRepository = participantRepository;
    }

    @Override
    public List<Participant> getAll() {
        return (List<Participant>) participantRepository.findAll();
    }

    @Override
    public Participant get(Long id) {
        return participantRepository.findById(id).get();
    }

    @Override
    public Participant add(Participant participant) {
        return participantRepository.save(participant);
    }

    @Override
    public Participant update(Participant participant) {
        return participantRepository.save(participant);
    }

    @Override
    public boolean delete(Participant participant) {
        try {
            participantRepository.delete(participant);
            return true;
        }catch (DataAccessException e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}
