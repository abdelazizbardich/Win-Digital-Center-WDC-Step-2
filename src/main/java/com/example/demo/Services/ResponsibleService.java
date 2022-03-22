package com.example.demo.Services;

import com.example.demo.models.ResponsibleType;
import org.springframework.beans.factory.annotation.Autowired;

public class ResponsibleService {

    private final ResponsibleType responsibleType;

    @Autowired
    public ResponsibleService(ResponsibleType responsibleType) {
        this.responsibleType = responsibleType;
    }
}
