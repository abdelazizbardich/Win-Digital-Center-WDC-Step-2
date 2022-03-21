package com.example.demo.models;

import javax.persistence.*;

//@MappedSuperclass
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "users")
public class User {

    @Id
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;

    @Column(name = "phone_number")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "status")
    private Boolean status;

    @ManyToOne
    @JoinColumn(name = "role_id")
//    @Column(name = "role_id")
    private Role role;

}
