package com.example.demo.Repositories;

import com.example.demo.models.ResponsibleType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponsibleTypeRepository extends CrudRepository<ResponsibleType,Long> {
}
