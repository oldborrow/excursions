package com.proger.demo.dao;

import com.proger.demo.entity.Article;
import com.proger.demo.service.ArticleService;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ArticleDao {

    private static Map<Integer, Article> articles;

    static {
        articles = new HashMap<Integer, Article>(){
            {
                put(1, new Article(1, "Python Learning"));
                put(2, new Article(2, "Java Forgetting"));
                put(3, new Article(3, "JS Understanding"));
            }
        };
    }

    public Collection<Article> getAllArticles() {
        return articles.values();
    }

    public Article getStudentById(int id) {
        return articles.get(id);
    }
}