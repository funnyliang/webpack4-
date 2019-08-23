import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Ts from './ts.tsx'
import Router1 from './router1'
import Router2 from './router2'

function Index() {
  return <h2>JSPang.com</h2>;
}

function List() {
  return <h2>List-Page</h2>;
}

const list = [
  { cid: 123, title: '技术博客-aaaaaaaaaaaaa' },
  { cid: 456, title: '技术胖的个人博客-2' },
  { cid: 789, title: '技术胖的个人博客-3' },
]

function App() {
  return (
    <Router>
      <ul>
        <li> <Link to="/">首</Link> </li>
        {
          list.map((item, index) => {
            return (
              <li key={index}> <Link to={'/list/' + item.cid}>{item.title}</Link> </li>
            )
          })
        }
      </ul>
      <Route path="/" exact component={Router1} />
      <Route path="/list/:id" component={Router2} />
      <Ts />
    </Router>
  );
}

export default App;
