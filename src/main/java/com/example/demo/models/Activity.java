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

    public Activity() {
    }

    public Activity(String title, String description, ActivityType type, ActivityStatus status, LocalDateTime endDate, LocalDateTime startDate, Exercise exercise) {
        this.title = title;
        this.description = description;
        this.type = type;
        this.status = status;
        this.endDate = endDate;
        this.startDate = startDate;
        this.exercise = exercise;
    }

    public Activity(Long activityId, String title, String description, ActivityType type, ActivityStatus status, LocalDateTime endDate, LocalDateTime startDate, Exercise exercise) {
        this.activityId = activityId;
        this.title = title;
        this.description = description;
        this.type = type;
        this.status = status;
        this.endDate = endDate;
        this.startDate = startDate;
        this.exercise = exercise;
    }

    public Long getActivityId() {
        return activityId;
    }

    public void setActivityId(Long activityId) {
        this.activityId = activityId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ActivityType getType() {
        return type;
    }

    public void setType(ActivityType type) {
        this.type = type;
    }

    public ActivityStatus getStatus() {
        return status;
    }

    public void setStatus(ActivityStatus status) {
        this.status = status;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public Exercise getExercise() {
        return exercise;
    }

    public void setExercise(Exercise exercise) {
        this.exercise = exercise;
    }

    @Override
    public String toString() {
        return "Activity{" +
                "activityId=" + activityId +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", type=" + type +
                ", status=" + status +
                ", endDate=" + endDate +
                ", startDate=" + startDate +
                ", exercise=" + exercise +
            '}';
    }
}
