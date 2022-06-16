package com.proger.demo.controller;

import com.proger.demo.entity.Article;
import com.proger.demo.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/editor")
public class EditorController {

    @Autowired
    private ArticleService articleService;

    @GetMapping
    public String pr() {
        return "It's editor";
    }

    @PostMapping(consumes = "application/json")
    public void addNewArticle(@RequestBody @Valid Article article) {
        articleService.addNewArticle(article);
    }
}
