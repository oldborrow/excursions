package com.proger.demo.controller;

import com.proger.demo.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/editor")
public class EditorController {
    @Autowired
    private ArticleService articleService;

    @GetMapping
    public void printingEditor() {
        
    }
}
