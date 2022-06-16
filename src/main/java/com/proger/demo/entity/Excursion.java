package com.proger.demo.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "excursion")
public class Excursion {
    @Id
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String content;

    public Excursion(Long id, String name, String content) {
        this.id = id;
        this.content = content;
        this.name = name;
    }
}
