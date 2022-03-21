package com.example.demo.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Table(name = "activities")
public class Activity {

    enum ActivityType {
        FORMATION,
        TALK,
        EVENT
    }
    enum ActivityStatus{
        ENABLED,
        DISABLED
    }

    @Id
    @Column(name = "activity_id")
    private Long activityId;

    @Column(name = "title")
    @NotBlank(message = "Title cannot be blank")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "type")
    private ActivityType type;

    @Column(name = "status")
    private ActivityStatus status;

    @Column(name = "endDate")
    private LocalDateTime endDate;

    @Column(name = "startDate")
    private LocalDateTime startDate;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;



}
