package com.proger.demo.service;

import com.proger.demo.dao.ArticleDao;
import com.proger.demo.entity.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ArticleService {

    @Autowired
    private ArticleDao articleDao;

    public Collection<Article> getAllArticles() {
        return articleDao.getAllArticles();
    }

    public Article getArticleById(int id) {
        return this.articleDao.getStudentById(id);
    }

    public Article getStudentById(int id) {
        return articleDao.getStudentById(id);
    }
}
