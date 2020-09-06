import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Home from './Components/Home/Home';
import PostsDetail from './Components/PostsDetail/PostsDetail';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path = "/home">
            <Home></Home>
          </Route>        
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "/posts/detail/:id">
            <PostsDetail></PostsDetail>
          </Route>
          <Route path = "*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
