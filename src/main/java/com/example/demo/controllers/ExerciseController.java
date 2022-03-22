package com.example.demo.controllers;

import com.example.demo.models.Exercise;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exercise")
public class ExerciseController {

    @GetMapping("/")
    public List<Exercise> getAll(){
        return List.of(
                new Exercise(),
                new Exercise(),
                new Exercise(),
                new Exercise(),
                new Exercise(),
                new Exercise(),
                new Exercise()
        );
    }

    @GetMapping("/find/{id}")
    public Exercise find(@PathVariable("id") Long id){
        Exercise exercise = new Exercise();
        exercise.setExerciseId(id);
        return exercise;
    }

    @PostMapping("/update/{id}")
    public Exercise update(@RequestBody Exercise exercise,@PathVariable("id") Long id){
        exercise.setExerciseId(id);
        return exercise;
    }

    @PostMapping("/add")
    public Exercise store(@RequestBody Exercise exercise){
        return exercise;
    }
}
