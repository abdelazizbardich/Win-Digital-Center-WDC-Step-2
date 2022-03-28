package com.example.demo.Repositories;

import com.example.demo.models.Participant;
import com.example.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParticipantRepository extends JpaRepository<Participant,Long> {

    public Participant findFirstByEmail(String email);
}
