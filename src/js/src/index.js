import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Footer from "./Footer";

ReactDOM.render(

  <React.StrictMode>
      {/*<App />*/}
      <BrowserRouter>

          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/ListOfUsers">ListOfUsers</Link>
              </li>
              <li>
                  <Link to="/contact">Contact Us</Link>
              </li>
          </ul>
          <Routes>
              <Route path="/ListOfUsers" element={<App/>}/>

              {/*<Route path="/ListOfProviders" component={ListOfProviders} />
                <Route path="/ListOfDiagnosis" component={ListOfDiagnosis} />
                <Route path="/ListOfNewPatients" component={ListOfNewPatients} />
                <Route path="/NumberOfAdmissions" component={NumberOfAdmissions} />
                <Route component={ListOfUsers} />*/}
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
