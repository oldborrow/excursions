import React from "react";
import {Button} from 'antd';
import './css/Footer.css';

const Footer = (props) => (
    <div style={{width : 300,  margin: '0 auto', textAlign: 'center'}} className={'footer'}>
        <Button onClick={() => props.handleAddArticleClickEvent()}  type={'primary'}>Показать контакты</Button>
    </div>
)

export default Footer;