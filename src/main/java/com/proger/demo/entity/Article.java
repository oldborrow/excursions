package com.proger.demo.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Getter @Setter @NoArgsConstructor
public class Article {

    private Long id;
    private String title;
    private LocalDate creationDate;
    private String content;

    public Article(Long id,
                   String title,
                   LocalDate creationDate,
                   String content) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.content = content;
    }
}
