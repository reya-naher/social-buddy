import React, { useState, useEffect } from 'react';
import './PostsDetail.css';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const PostsDetail = (props) => {
  const { classes } = props
  const { id } = useParams();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [id])

  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
      .then(data => setComments(data))
  }, [id])
  return (
    <Grid>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.textCustom} gutterBottom variant="h5" component="h5">
            {posts.title}
          </Typography>
          <Typography variant="h6" component="h6">
            {posts.body}
          </Typography>
        </CardContent>
        <Button variant="contained" color="inherit"><Link to="/home">
          Back
           <br />
          <ArrowBackIcon /></Link></Button>
      </Card>
      {
        comments.map((comment, index) => <Comments key={index} comment={comment}></Comments>)
      }
    </Grid>
  );
};

export default withStyles({
  root: {
    backgroundColor: "#15b095",
    margin: "10px",
    boxSizing: "border-box",
    padding: "20px",
    textAlign: "center"
  },
  textCustom: {
    fontWeight: "bold",
    color: "white"
  }

})(PostsDetail);