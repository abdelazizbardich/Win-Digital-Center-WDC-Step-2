package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    @Column(name = "role_id")
    private Long roleId;

    @Column(name = "name")
    private String name;

    @Column(name = "access")
    private String access;

}
