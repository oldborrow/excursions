package com.proger.demo.dao;
import com.proger.demo.entity.Excursion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ExcursionRepository extends JpaRepository<Excursion, Long> {
    Optional<Excursion> findById(Long id);
}
