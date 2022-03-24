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
    @GeneratedValue(strategy = GenerationType.AUTO)
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


    public Exercise(Long exerciseId, String title, int year, ExerciseStatus status, LocalDateTime startDate, LocalDateTime endDate) {
        this.exerciseId = exerciseId;
        this.title = title;
        this.year = year;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Exercise(String title, int year, ExerciseStatus status, LocalDateTime startDate, LocalDateTime endDate) {
        this.title = title;
        this.year = year;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Exercise() {
    }

    public Long getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(Long exerciseId) {
        this.exerciseId = exerciseId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public ExerciseStatus getStatus() {
        return status;
    }

    public void setStatus(ExerciseStatus status) {
        this.status = status;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "exerciseId=" + exerciseId +
                ", title='" + title + '\'' +
                ", year=" + year +
                ", status=" + status +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                '}';
    }
}