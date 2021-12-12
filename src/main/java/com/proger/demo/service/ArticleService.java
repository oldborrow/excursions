package com.proger.demo.service;

import com.proger.demo.dao.ArticleRepository;
import com.proger.demo.entity.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {

    private final ArticleRepository articleRepository;

    @Autowired
    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<Article> getArticles() {
        return articleRepository.findAll();
    }



    public void addNewArticle(Article article) {
        Optional<Article> articleOptional = articleRepository
                .findArticleByTitle(article.getTitle());
        if (articleOptional.isPresent()) {
            throw new IllegalStateException("Title already exists");
        }
        articleRepository.save(article);
    }

    public void deleteArticle(Long articleId) {
        if (!articleRepository.existsById(articleId)) {
            throw new IllegalStateException(
                    "article with id " + articleId +
                    " does not exist");
        }
        articleRepository.deleteById(articleId);
    }
}
