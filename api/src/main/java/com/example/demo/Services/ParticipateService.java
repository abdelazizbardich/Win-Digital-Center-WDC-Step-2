package com.example.demo.Services;

import com.example.demo.Repositories.ParticipateRepository;
import com.example.demo.models.Participate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParticipateService implements Services<Participate>{

    private final ParticipateRepository participateRepository;

    @Autowired
    public ParticipateService(ParticipateRepository participateRepository) {
        this.participateRepository = participateRepository;
    }

    @Override
    public List<Participate> getAll() {
        return (List<Participate>) participateRepository.findAll();
    }

    @Override
    public Participate get(Long id) {
        return participateRepository.findById(id).get();
    }

    @Override
    public Participate add(Participate participate) {
        return participateRepository.save(participate);
    }

    @Override
    public Participate update(Participate participate) {
        return participateRepository.save(participate);
    }

    @Override
    public boolean delete(Participate participate) {
        try {
            participateRepository.delete(participate);
            return true;
        }catch (DataAccessException e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}
