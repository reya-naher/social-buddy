import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import {Card, CardContent,Typography,Grid} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const PostsDetail = (props) => {
  const { classes } = props
  const { id } = useParams();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
    .then(data => setPosts(data))
  },[id])

  const [comments, setComments] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
    .then(data => setComments(data))
  },[id])
  return ( 
    <div>
   <Grid container justify="center">
    <Card className={classes.item}>
   <CardContent>
   <Typography gutterBottom variant="h5" component="h2">
           Title: {posts.title}
         </Typography>
   <Typography variant="h6" component="p">
  Body: {posts.body}
     </Typography>
     </CardContent>
     </Card>  
      {
        comments.map((comment,index) =>  <Comments key={index} comment={comment}></Comments>)
       }
   </Grid>
    </div>
 
  );
};

export default withStyles({
  item: {
    minWidth: "350px",
    margin: "1em",
    boxSizing: "border-box",
    color: "#003399",
    textAlign: "center"
  }

})(PostsDetail);