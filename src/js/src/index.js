import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Redirect, Route, Routes} from "react-router-dom";
import {Breadcrumb} from "antd";
import AddArticleForm from "./forms/AddArticleForm"

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Breadcrumb>
              <Breadcrumb.Item>
                  <a href="/">Main</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                  <a href="/editor">Editor</a>
              </Breadcrumb.Item>
          </Breadcrumb>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/editor" element={<AddArticleForm/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
