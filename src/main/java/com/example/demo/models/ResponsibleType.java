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

    public ResponsibleType(Long responsibleTypeId, String type) {
        this.responsibleTypeId = responsibleTypeId;
        this.type = type;
    }

    public ResponsibleType(String type) {
        this.type = type;
    }

    public Long getResponsibleTypeId() {
        return responsibleTypeId;
    }

    public void setResponsibleTypeId(Long responsibleTypeId) {
        this.responsibleTypeId = responsibleTypeId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "ResponsibleType{" +
                "responsibleTypeId=" + responsibleTypeId +
                ", type='" + type + '\'' +
                '}';
    }
}
