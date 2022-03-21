package com.example.demo.models;


import javax.persistence.*;

@Entity
@Table(name = "participates")
public class Participate {

    @Id
    @Column(name = "participate_id")
    private Long participateId;

    @ManyToOne
    @JoinColumn(name = "participant_ID")
//    @Column(name = "participant_ID")
    private Participant participant;

    @ManyToOne
    @JoinColumn(name = "activity_id")
//    @Column(name = "activity_id")
    private Activity activity;

    @Column(name = "attendance")
    private boolean attendance;

}
