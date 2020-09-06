import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import {Grid} from '@material-ui/core';

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div >
    <Grid  xs={12} container spacing={10} justify="center">
      {
        posts.map(post => <Posts post={post} key={post.id}></Posts>)
      }
    </Grid>
    </div>

  );
};

export default Home;