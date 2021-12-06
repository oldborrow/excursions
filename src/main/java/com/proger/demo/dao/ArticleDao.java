package com.proger.demo.dao;

import com.proger.demo.entity.Article;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class ArticleDao {

    private static Map<Integer, Article> articles;

    static {
        articles = new HashMap<Integer, Article>(){
            {
                put(1, new Article(1L, "Python Learning", LocalDate.now(), "Text of the article"));
                put(2, new Article(2L, "Java Forgetting", LocalDate.now(), "Text of the article"));
                put(3, new Article(3L, "JS Understanding", LocalDate.now(), "Text of the article"));
            }
        };
    }

    public Collection<Article> getAllArticles() {
        return articles.values();
    }

    public Article getArticleById(int id) {
        return articles.get(id);
    }
}