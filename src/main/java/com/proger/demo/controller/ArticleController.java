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

    @RequestMapping(method = RequestMethod.GET)
    public Collection<Article> getAllArticles() {
        return articleService.getAllArticles();
    }
}