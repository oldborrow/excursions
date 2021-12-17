import getAllArticles from './client';
import {Routes, Route, BrowserRouter as Router, hashHistory, Link} from 'react-router-dom';
import Footer from './Footer';
import {
    Card,
    Spin,
    Modal,
    Breadcrumb
} from 'antd';
import './App.css';
import React from "react";


class App extends React.Component {

    state = {
        articles : [],
        isFetching : false,
        isAddArticleModalVisible: false
    }

    componentDidMount() {
        this.fetchArticles();
    }

    openAddArticleModal = () => this.setState({isAddArticleModalVisible: true});

    closeAddArticleModal = () => this.setState({isAddArticleModalVisible: false});

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

        const {articles, isFetching, isAddArticleModalVisible} = this.state;

        if (isFetching) {
            return (
                <Spin size="large"/>
            )
        }


        const listCards = articles.map((article, id) => {

            return (

                <Card title={article.title}
                      extra={<a href="#">Read</a>}
                      style={{width : 300,  margin: '0 auto', textAlign: 'center'}}
                      hoverable={true}>
                    <p>{article.content}</p>
                    <p>Card content</p>
                    <p>Card content</p>

                </Card>

            )
        })

        return (
            <div>

                {listCards}
                <Modal
                    title='Add new article'
                    visible={isAddArticleModalVisible}
                    onOk={this.closeAddArticleModal}
                    onCancel={this.closeAddArticleModal}
                    width={1000}>
                    <h1>Hello modal with Antd</h1>
                </Modal>
                <Footer handleAddArticleClickEvent={this.openAddArticleModal}/>
            </div>

        )
    }
}

export default App;
