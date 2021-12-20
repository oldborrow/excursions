package com.proger.demo.controller;

import com.proger.demo.entity.Article;
import com.proger.demo.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/editor")
public class EditorController {

    private final ArticleService articleService;

    @Autowired
    public EditorController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PostMapping
    public void addNewArticle(@RequestBody Article article) {
        articleService.addNewArticle(null, article);
    }
}
