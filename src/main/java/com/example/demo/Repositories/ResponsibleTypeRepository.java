package com.example.demo.Repositories;

import com.example.demo.models.ResponsibleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponsibleTypeRepository extends JpaRepository<ResponsibleType,Long> {
}
