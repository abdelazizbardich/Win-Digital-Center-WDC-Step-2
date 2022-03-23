package com.example.demo.Repositories;

import com.example.demo.models.Participate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParticipateRepository extends CrudRepository<Participate,Long> {
}
