package com.example.demo.Repositories;

import com.example.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    public User findFirstByEmail(String email);
    Optional<User> findByLogin(String login);
}
