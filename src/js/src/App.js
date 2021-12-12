import getAllArticles from './client';
import {
    Card,
    Spin
} from 'antd';
import './App.css';
import React from "react";

class App extends React.Component {

    state = {
        articles : [],
        isFetching : false
    }

    componentDidMount() {
        this.fetchArticles();
    }

    fetchArticles = () => {
        this.setState({
            isFetching : true
        })
        getAllArticles
            .then(res => res.json()
                .then(articles => {
                    console.log(articles)
                    this.setState({
                        articles,
                        isFetching : false
                    })
                }))
    }

    render() {

        const {articles, isFetching} = this.state;

        if (isFetching) {
            return (
                <Spin size="large"/>
            )
        }

        return articles.map((article, id) => {
            return (
                <Card title={article.title}
                    extra={<a href="#">More</a>}
                    style={{width : 300}}
                    hoverable={true}>
                    <p>{article.content}</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            )
        })
    }
}

export default App;
