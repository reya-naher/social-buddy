import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';
import { Grid } from '@material-ui/core';
import Header from '../Header/Header';

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div >
      <Header></Header>
      <Grid item xs={12} container spacing={2} mt={10}
        justify = "center">
        {
          posts.map(post => <Posts post={post} key = {post.id}></Posts>)
        }
      </Grid>
    </div>
  );
};

export default Home;