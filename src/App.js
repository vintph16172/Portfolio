import React from 'react';

import {Routes,Route } from 'react-router-dom'
import './App.css';
import WebsiteLayout from './features/layout/WebsiteLayout';
import HomePage from './features/pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<WebsiteLayout /> } >
            <Route index element={<HomePage /> } />
            <Route path='/work' element={<h1>Work</h1> } />
          </Route>
          
        
      </Routes>
    </div>
  );
}

export default App;
