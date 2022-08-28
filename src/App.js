import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css'
import Repositories from './containers/Repositories';
import Repository from './containers/Repository';

function App(){
  return (
    <Router>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="/repos/:owner/:name" element={<Repository />} />
      </Routes>
    </div>
    </Router>
  )
}


export default App;