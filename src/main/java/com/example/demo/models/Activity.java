package com.example.demo.models;

import java.time.LocalDateTime;

public class Activity {
    enum Type {
        FORMATION,
        TALK,
        EVENT
    }
    enum Status{
        ENABLED,
        DISABLED
    }
    private Long id;
    private String title;
    private String description;
    private Type type;
    private Status status;
    private LocalDateTime endDate;
    private LocalDateTime startDate;


}
