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

    public Responsible(Long userId, String firstName, String lastName, String login, String password, String phone, String email, Boolean status, Role role, String domain, ResponsibleType type) {
        super(userId, firstName, lastName, login, password, phone, email, status, role);
        this.domain = domain;
        this.type = type;
    }

    public Responsible(String firstName, String lastName, String login, String password, String phone, String email, Boolean status, Role role, String domain, ResponsibleType type) {
        super(firstName, lastName, login, password, phone, email, status, role);
        this.domain = domain;
        this.type = type;
    }

    public Responsible() {
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public ResponsibleType getType() {
        return type;
    }

    public void setType(ResponsibleType type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return super.toString()+" Responsible{" +
                "domain='" + domain + '\'' +
                ", type=" + type +
                '}';
    }
}
