import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route
        
} from 'react-router-dom';
import styled from "styled-components"
//pages
import MainPage from './component/page/MainPage';

import PostViewPage from './component/page/PostViewPage';

 

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post/:postId" element={<PostViewPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
