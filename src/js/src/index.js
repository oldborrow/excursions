import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './css/index.css';
import App from './App';
import reportWebVitals from './useless scripts/reportWebVitals';
import {Breadcrumb, Menu, Layout} from "antd";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Excursion from "./Excursion";
const { Header, Content, Footer } = Layout;
const items = [
    { label: 'item 1' },
    { label: 'google.com' },
];
ReactDOM.render(
  <React.StrictMode>
      <Layout>
          <Header style={{
                  position: 'fixed',
                  zIndex: 1,
                  width: '100%',
              }}>
              <Menu mode="horizontal" theme={"dark"} >
                  {<Menu.Item>Экскурсии по Москве</Menu.Item>}
              </Menu>
          </Header>
          <Content
              className="site-layout"
              style={{
                  padding: '0 50px',
                  marginTop: 64,
              }}
          >
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<App/>}/>
                      <Route path="/excursion/1" element={<Excursion myid={1}/>}/>
                      <Route path="/excursion/2" element={<Excursion myid={2}/>}/>
                      <Route path="/excursion/3" element={<Excursion myid={3}/>}/>
                      <Route path="/excursion/4" element={<Excursion myid={4}/>}/>
                      <Route path="/excursion/5" element={<Excursion myid={5}/>}/>
                      <Route path="/excursion/6" element={<Excursion myid={6}/>}/>
                      <Route path="/excursion/7" element={<Excursion myid={7}/>}/>
                      <Route path="/excursion/8" element={<Excursion myid={8}/>}/>
                      <Route path="/excursion/9" element={<Excursion myid={9}/>}/>
                      <Route path="/excursion/0" element={<Excursion myid={0}/>}/>
                      <Route path="/excursion" element={<Excursion/>}/>
                  </Routes>
              </BrowserRouter>
          </Content>
      </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
