package com.proger.demo.controller;

import com.proger.demo.entity.Article;
import com.proger.demo.exception.ApiRequestException;
import com.proger.demo.service.ArticleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping
    public Collection<Article> printingArticles() {
//        return articleService.getArticles();
        throw new ApiRequestException("Oops cant get all articles with custom exception");
    }

    @DeleteMapping(path="{articleId}")
    public void deleteArticle(
            @PathVariable("articleId") Long articleId) {
        articleService.deleteArticle(articleId);
    }
}
