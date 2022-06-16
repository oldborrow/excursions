import { getAllArticles } from './client';
import Footer from './Footer';
import {
    Card,
    Spin
} from 'antd';
import {errorNotification} from "./useless scripts/Notification";
import './css/App.css';
import React from "react";
import { Col, Row } from 'antd';
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
        getAllArticles().then(res => res.json()
                .then(articles => {
                    console.log(articles)
                    this.setState({
                        articles,
                        isFetching : false
                    })
                }))
            .catch(error => {
                const message = error.error.message;
                const description = error.error.error;
                errorNotification(message, description);
                this.setState({
                    isFetching: false
                })
            })
    }

    render() {

        const {articles, isFetching, isAddArticleModalVisible} = this.state;
        if (isFetching) {
            return (
                <Spin size="large"/>
            )
        }


        const listCards = articles.map((article, id) => {
            const reference = "http://localhost:3000/excursion/" + id
            return (

                    <Col span={8} >
                <Card title={article.title}
                      style={{width : 400, height: 150, margin: '0 auto', textAlign: 'center', marginTop: '20px'}}
                      hoverable={true}>
                    <p>{article.content}</p>
                    <a href={reference}>Подробнее</a>

                </Card>
                    </Col>

            )
        })

        return (
                        <div>
                            <Row gutter={16}>
                                {listCards}
                            </Row>
                            <Footer handleAddArticleClickEvent={this.openAddArticleModal}/>
                        </div>

        )
    }
}

export default App;
