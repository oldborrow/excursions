import React, {Component} from "react";
import {getAllExcursions} from "./client";
import {Card, Col, Image, Spin, Typography} from "antd";
import {errorNotification} from "./useless scripts/Notification";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/es/typography/Title";
class Excursion extends React.Component {

    state = {
        excursion : [],
        isFetching : false,
        isAddArticleModalVisible: false
    }

    componentDidMount() {
        this.fetchExcursion();
    }
    fetchExcursion = () => {
        this.setState({
            isFetching : true
        })
        getAllExcursions().then(res => res.json()
            .then(excursion => {
                console.log(excursion)
                this.setState({
                    excursion,
                    isFetching : false
            })
        })).catch(error => {
            const message = error.error.message;
            const description = error.error.error;
            errorNotification(message, description);
            this.setState({
                isFetching: false
            })
        })
    }

    render () {
        console.log(this.props.myid)
        const {excursion, isFetching, isAddArticleModalVisible} = this.state;
        if (isFetching) {
            return <Spin size="large"/>
        }
        const pics = ["https://n1s1.elle.ru/44/77/3b/44773bd5ad8e3ab6a2d108fccbd28c11/727x503_1_da336e8e9055f07b84d748c36434d67a@940x650_0xc35dbb80_6014807221497609956.jpeg",
        "https://n1s1.elle.ru/17/03/7e/17037e867ca735d7a827c6f4c03092ca/727x503_1_eb3aaf7acac19287a4c5ce1d8dfddc62@940x650_0xc35dbb80_17623187991497610611.jpeg",
        "https://n1s1.elle.ru/d0/b2/88/d0b288395bbbcb903f1ac4ddac2eaa5c/727x503_1_a81638530873c1ecfd18ebfdb1c83f9c@940x650_0xc35dbb80_8585071221497611908.jpeg",
        "https://n1s1.elle.ru/d0/90/38/d0903816d618e43f4b889692b7441d17/727x503_1_dc031aa9d572ece4b626198085b4c74b@940x650_0xc35dbb80_5533684381497611985.jpeg",
        "https://n1s1.elle.ru/be/2d/7f/be2d7fb1364b6ec019c6a596f523486a/727x503_1_d2c5a10416afc62fb109eb6b93273a78@940x650_0xc35dbb80_4605426651497611949.jpeg",
        "https://n1s1.elle.ru/fb/00/b1/fb00b1bf79cd10eb4e108fb34ca9128d/727x503_1_dc22155248d417c444c92b551ab67e9b@940x650_0xc35dbb80_12095020091497611839.jpeg",
            "https://n1s1.elle.ru/40/a4/39/40a439635931c7906510249a7e8951a4/727x503_1_3969415bdf795b3356b610e3917ca1a4@940x650_0xc35dbb80_5627891821497616119.jpeg",
            "https://n1s1.elle.ru/f5/81/c4/f581c41d34959a297c0112e44c185494/727x503_1_f515bf4ca7f2506738d58560b356b16d@940x650_0xc35dbb80_16564159451497616185.jpeg",
            "https://n1s1.elle.ru/0a/e3/ce/0ae3cedd69cbd3e7bcec9d22e16eba96/727x503_1_cbd3cefdb00d5d6daef5d6b796f9d9c2@940x650_0xc35dbb80_4067827381497619372.jpeg",
            "https://n1s1.elle.ru/d1/ef/11/d1ef11d10bf8b4bd9eaed0f52dbe1304/727x503_1_d2845dad5b8da9c02911d3863218d00d@940x650_0xc35dbb80_20458312461497619464.jpeg"]
        const listCards = excursion.map((article, index) => {
            return (

                <Typography>
                    <Title>{article.name}</Title>
                    <Paragraph>{article.content}</Paragraph>
                    <Image src={pics[index]}>Yes</Image>
                </Typography>
            )
        })
            return (<div>
                    <div>{listCards[this.props.myid]}</div>
            </div>
            )


    }
}

export default Excursion;