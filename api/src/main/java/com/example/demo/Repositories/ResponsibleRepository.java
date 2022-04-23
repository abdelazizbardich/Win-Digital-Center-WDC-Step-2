package com.example.demo.Repositories;

import com.example.demo.models.Responsible;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponsibleRepository extends JpaRepository<Responsible,Long> {


    public Responsible findFirstByEmail(String email);
}
