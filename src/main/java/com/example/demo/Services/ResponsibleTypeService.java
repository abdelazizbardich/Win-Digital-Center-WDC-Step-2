package com.example.demo.Services;

import com.example.demo.Repositories.ResponsibleTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ResponsibleTypeService {
    private final ResponsibleTypeRepository responsibleTypeRepository;

    @Autowired
    public ResponsibleTypeService(ResponsibleTypeRepository responsibleTypeRepository) {
        this.responsibleTypeRepository = responsibleTypeRepository;
    }
}
