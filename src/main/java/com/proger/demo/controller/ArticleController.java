package com.proger.demo.controller;

import com.proger.demo.entity.Article;
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
        return articleService.getArticles();
    }

    @GetMapping(path="{title}")
    public Article getArticle(
            @PathVariable String title) {
        return articleService.getArticle(title);
    }
}
