package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "participants")
@PrimaryKeyJoinColumn(name = "user_id")
public class Participant extends User{

    @Column(name = "domain")
    private String domain;

    @Column(name = "structure")
    private String structure;
}
