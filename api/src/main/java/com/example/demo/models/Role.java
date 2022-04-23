package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    @Column(name = "role_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long roleId;

    @Column(name = "name")
    private String name;

    @Column(name = "access")
    private String access;

    public Role(Long roleId, String name, String access) {
        this.roleId = roleId;
        this.name = name;
        this.access = access;
    }

    public Role(String name, String access) {
        this.name = name;
        this.access = access;
    }

    public Role() {
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAccess() {
        return access;
    }

    public void setAccess(String access) {
        this.access = access;
    }

    @Override
    public String toString() {
        return "Role{" +
                "roleId=" + roleId +
                ", name='" + name + '\'' +
                ", access='" + access + '\'' +
                '}';
    }
}
