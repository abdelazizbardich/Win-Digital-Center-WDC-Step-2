package com.example.demo.Services;

import com.example.demo.Repositories.ResponsibleRepository;
import com.example.demo.models.Responsible;
import com.example.demo.models.ResponsibleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponsibleService implements Services<Responsible>{

    private final ResponsibleRepository responsibleRepository;

    @Autowired
    public ResponsibleService(ResponsibleRepository responsibleRepository) {
        this.responsibleRepository = responsibleRepository;
    }

    @Override
    public List<Responsible> getAll() {
        return (List<Responsible>) responsibleRepository.findAll();
    }

    @Override
    public Responsible get(Long id) {
        return responsibleRepository.findById(id).get();
    }

    @Override
    public Responsible add(Responsible responsible) {
        return responsibleRepository.save(responsible);
    }

    @Override
    public Responsible update(Responsible responsible) {
        return responsibleRepository.save(responsible);
    }

    @Override
    public boolean delete(Responsible responsible) {
        try {
            responsibleRepository.delete(responsible);
            return true;
        }catch (DataAccessException e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}
