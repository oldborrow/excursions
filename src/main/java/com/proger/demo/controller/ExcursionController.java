package com.proger.demo.controller;

import com.proger.demo.entity.Excursion;
import com.proger.demo.service.ExcursionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/excursion")
public class ExcursionController {
    @Autowired
    ExcursionService excursionService;

    @GetMapping
    public List<Excursion> GetExcursion() {
        return excursionService.getExcursions();
    }

    @GetMapping(path = "/{id}")
    public Optional<Excursion> GetExcursionById(@PathVariable Long id) {
        return excursionService.getExcursion(id);
    }
}
