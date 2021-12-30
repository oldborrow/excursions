package com.proger.demo.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter @NoArgsConstructor
@Entity @Table(name = "article")
public class Article {


    @SequenceGenerator(
            name = "article_sequence",
            sequenceName = "article_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.AUTO,
            generator = "article_sequence"
    )
    @Id
    private Long id;

    @NotBlank
    private String title;

    @NotBlank
    private String content;

    public Article(Long id,
                   String title,
                   String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    public Article(@JsonProperty("title") String title,
                   @JsonProperty("content") String content) {
        this.title = title;
        this.content = content;
    }

    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
