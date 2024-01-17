import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import { useState, useEffect} from 'react';
import Navbar from './components/navbar';
import Event from './components/events';
import Home from './components/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/event' element={<Event/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
