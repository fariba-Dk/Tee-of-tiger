import React from "react";
import { Routes,
  Route,
  Switch } from "react-router-dom";

import './App.css';
import Home from './routes/Home'
import Posts from './routes/Posts'
import UpdatePost from './routes/UpdatePost'
import PostDetail from './routes/UpdatePost'
import NavBar from './components/Nav'


function App() {
  return (
    <div>

      <NavBar/>

      <Routes>

          <Route path="/" exact element={<Home/>}/>
          <Route path="/posts" exact element={<Posts/>}/>
          <Route path="/posts/:id/update" element={<UpdatePost/>}/>
          <Route path="/posts/:id" element={<PostDetail/>}/>

      </Routes>

      </div>

  );
}

export default App;
