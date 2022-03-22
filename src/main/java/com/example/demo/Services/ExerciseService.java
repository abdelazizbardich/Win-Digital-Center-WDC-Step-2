package com.example.demo.Services;

import com.example.demo.Repositories.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    @Autowired
    public ExerciseService(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }
}
