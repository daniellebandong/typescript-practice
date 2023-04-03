import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import HelloWorld from './components/HelloWorld'
import List from './components/List'

const avengers =[
  { name: 'Captain America' },
  { name: 'Iron Man' },
  { name: 'Black Widow' },
  { name: 'Thor' },
  { name: 'Hawkeye' },
  { name: 'Vision' },
  { name: 'Hulk' },
]

function App() {
  return (
    <Router>
      <Link to={"/avengers"}>Link to avengers list</Link>
      <Routes>
        <Route path='/' element={<HelloWorld/>}/>
        <Route path='avengers' element={<List data={avengers}/>}/>
      </Routes>
    </Router>

  );
}

export default App;
