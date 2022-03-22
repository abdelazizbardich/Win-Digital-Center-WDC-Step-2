package com.example.demo.Repositories;

import com.example.demo.models.Exercise;
import org.springframework.data.repository.CrudRepository;

public interface ExerciseRepository extends CrudRepository<Exercise,Long> {
}
