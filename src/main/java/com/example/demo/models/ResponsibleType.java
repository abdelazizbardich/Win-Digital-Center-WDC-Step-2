package com.example.demo.models;


import javax.persistence.*;

@Entity
@Table(name = "responsible_types")
public class ResponsibleType {

    @Id
    @Column(name = "responsible_type_id")
    private Long responsibleTypeId;

    @Column(name = "type")
    private String type;
}
