package com.example.demo.Repositories;

import com.example.demo.models.Responsible;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponsibleRepository extends CrudRepository<Responsible,Long> {


    public Responsible findFirstByEmail(String email);
}
