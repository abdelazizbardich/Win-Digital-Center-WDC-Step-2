package com.example.demo.Repositories;

import com.example.demo.models.Participant;
import org.springframework.data.repository.CrudRepository;

public interface ParticipantRepository extends CrudRepository<Participant,Long> {
}
