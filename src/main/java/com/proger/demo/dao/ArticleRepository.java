package com.proger.demo.dao;

import com.proger.demo.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ArticleRepository
        extends JpaRepository<Article, Long> {

    // SELECT * FROM article WHERE email = ?
    Optional<Article> findArticleByTitle(String title);

    Article findByTitleIgnoreCase(String title);

}