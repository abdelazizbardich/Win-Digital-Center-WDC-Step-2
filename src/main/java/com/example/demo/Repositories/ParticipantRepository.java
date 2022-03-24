package com.example.demo.Repositories;

import com.example.demo.models.Participant;
import com.example.demo.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParticipantRepository extends CrudRepository<Participant,Long> {

    public Participant findFirstByEmail(String email);
}
