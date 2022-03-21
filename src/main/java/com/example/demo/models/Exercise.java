package com.example.demo.models;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Entity
@Table(name = "exercises")
public class Exercise {

    enum ExerciseStatus {
        IN_PROGRESS,
        COMPLETED
    }

    @Id
    @Column(name = "exercise_id")
    private Long exerciseId;

    @Column(name = "title")
    private String title;

    @Column(name = "year")
    private int year;

    @Column(name = "status")
    private ExerciseStatus status;

    @Column(name = "start_date")
    private LocalDateTime startDate;

    @Column(name = "end_date")
    private LocalDateTime endDate;


    @OneToMany
    @JoinColumn(name = "exercise_id")
    private List<Activity> activities;

}