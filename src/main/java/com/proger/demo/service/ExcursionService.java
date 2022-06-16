package com.proger.demo.service;

import com.proger.demo.dao.ExcursionRepository;
import com.proger.demo.entity.Excursion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExcursionService {
    private final ExcursionRepository excursionRepository;

    @Autowired
    public ExcursionService(ExcursionRepository excursionRepository) {
        this.excursionRepository = excursionRepository;
    }

    public List<Excursion> getExcursions() {
        return excursionRepository.findAll();
    }
    public Optional<Excursion> getExcursion(Long id) {
        return excursionRepository.findById(id);
    }

}
