package com.proger.demo.service;

import com.proger.demo.dao.ArticleRepository;
import com.proger.demo.entity.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    void addNewArticle(Article article) {

        // TODO: verify title is not taken

        articleRepository.save(article);
    }

    public void addNewArticle(UUID articleId, Article article) {
        UUID newArticleId = Optional.ofNullable(articleId)
                .orElse(UUID.randomUUID());
        // TODO: verify title is not taken
        article.setId(newArticleId.getMostSignificantBits() & Long.MAX_VALUE);
        articleRepository.save(article);
    }

    public List<Article> getArticles() {
        return articleRepository.findAll();
    }



    /*public void addNewArticle(Article article) {
        Optional<Article> articleOptional = articleRepository
                .findArticleByTitle(article.getTitle());
        if (articleOptional.isPresent()) {
            throw new IllegalStateException("Title already exists");
        }
        articleRepository.save(article);
    }*/

    public void deleteArticle(Long articleId) {
        if (!articleRepository.existsById(articleId)) {
            throw new IllegalStateException(
                    "article with id " + articleId +
                    " does not exist");
        }
        articleRepository.deleteById(articleId);
    }
}
