import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Blog from './Blog/Blog';
import BlogPage from './BlogPage/BlogPage';
import Card from './Card/Card';
import Data from './Data/Page1';
import Pages from './Pages/Page4'
import Page9 from './Assets/Page9';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page9/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
