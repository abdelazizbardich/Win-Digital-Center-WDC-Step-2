package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "responsibles")
@PrimaryKeyJoinColumn(name = "user_id")
public class Responsible extends User {

    @Column(name = "domain")
    private String domain;


    @OneToOne
    @JoinColumn(name = "responsible_type_id")
    private ResponsibleType type;

}
