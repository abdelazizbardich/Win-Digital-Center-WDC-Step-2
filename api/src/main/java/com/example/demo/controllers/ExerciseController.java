package com.example.demo.controllers;

import com.example.demo.Services.ExerciseService;
import com.example.demo.models.Exercise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exercise")
public class ExerciseController {

    private ExerciseService exerciseService;

    @Autowired
    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @GetMapping("/")
    public List<Exercise> getAll(){
        return exerciseService.getAll();
    }

    @GetMapping("/find/{id}")
    public Exercise find(@PathVariable("id") Long id){
        return exerciseService.get(id);
    }

    @PutMapping("/update/{id}")
    public Exercise update(@RequestBody Exercise exercise,@PathVariable("id") Long id){
        exercise.setExerciseId(id);
        return exerciseService.update(exercise);
    }

    @PostMapping("/add")
    public Exercise store(@RequestBody Exercise exercise){
        return exerciseService.add(exercise);
    }

    @DeleteMapping("/delete")
    public Boolean delete(Exercise exercise){
        return exerciseService.delete(exercise);
    }
}
