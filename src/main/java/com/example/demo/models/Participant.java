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

    public Participant(String firstName, String lastName, String login, String password, String phone, String email, Boolean status, Role role, String domain, String structure) {
        super(firstName, lastName, login, password, phone, email, status, role);
        this.domain = domain;
        this.structure = structure;
    }

    public Participant(Long userId, String firstName, String lastName, String login, String password, String phone, String email, Boolean status, Role role, String domain, String structure) {
        super(userId, firstName, lastName, login, password, phone, email, status, role);
        this.domain = domain;
        this.structure = structure;
    }

    public Participant() {
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getStructure() {
        return structure;
    }

    public void setStructure(String structure) {
        this.structure = structure;
    }

    @Override
    public String toString() {
        return super.toString()+" Participant{" +
                "domain='" + domain + '\'' +
                ", structure='" + structure + '\'' +
                '}';
    }
}
