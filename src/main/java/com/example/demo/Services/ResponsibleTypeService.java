package com.example.demo.Services;

import com.example.demo.Repositories.ResponsibleTypeRepository;
import com.example.demo.models.ResponsibleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponsibleTypeService implements Services<ResponsibleType> {
    private final ResponsibleTypeRepository responsibleTypeRepository;

    @Autowired
    public ResponsibleTypeService(ResponsibleTypeRepository responsibleTypeRepository) {
        this.responsibleTypeRepository = responsibleTypeRepository;
    }

    @Override
    public List<ResponsibleType> getAll() {
        return (List<ResponsibleType>) responsibleTypeRepository.findAll();
    }

    @Override
    public ResponsibleType get(Long id) {
        return responsibleTypeRepository.findById(id).get();
    }

    @Override
    public ResponsibleType add(ResponsibleType responsibleType) {
        return responsibleTypeRepository.save(responsibleType);
    }

    @Override
    public ResponsibleType update(ResponsibleType responsibleType) {
        return responsibleTypeRepository.save(responsibleType);
    }

    @Override
    public boolean delete(ResponsibleType responsibleType) {
        try {
            responsibleTypeRepository.delete(responsibleType);
            return true;
        }catch (DataAccessException e){
            System.out.println(e.getMessage());
            return false;
        }
    }
}
