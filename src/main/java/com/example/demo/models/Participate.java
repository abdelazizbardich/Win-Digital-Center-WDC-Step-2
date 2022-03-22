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

    public Participate(Long participateId, Participant participant, Activity activity, boolean attendance) {
        this.participateId = participateId;
        this.participant = participant;
        this.activity = activity;
        this.attendance = attendance;
    }

    public Participate(Participant participant, Activity activity, boolean attendance) {
        this.participant = participant;
        this.activity = activity;
        this.attendance = attendance;
    }

    public Participate() {
    }

    public Long getParticipateId() {
        return participateId;
    }

    public void setParticipateId(Long participateId) {
        this.participateId = participateId;
    }

    public Participant getParticipant() {
        return participant;
    }

    public void setParticipant(Participant participant) {
        this.participant = participant;
    }

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public boolean isAttendance() {
        return attendance;
    }

    public void setAttendance(boolean attendance) {
        this.attendance = attendance;
    }

    @Override
    public String toString() {
        return "Participate{" +
                "participateId=" + participateId +
                ", participant=" + participant +
                ", activity=" + activity +
                ", attendance=" + attendance +
                '}';
    }
}
