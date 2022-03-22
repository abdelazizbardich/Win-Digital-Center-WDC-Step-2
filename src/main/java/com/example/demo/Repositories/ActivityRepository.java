package com.example.demo.Repositories;

import com.example.demo.models.Activity;
import org.springframework.data.repository.CrudRepository;

public interface ActivityRepository extends CrudRepository<Activity,Long> {
}
