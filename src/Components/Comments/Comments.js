import React, { useState, useEffect } from 'react';
import { List, ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const Comments = (props) => {
  const { classes } = props;
  const { id, name, email, body } = props.comment;
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
    .then(data => setPhotos(data.results[0].picture.thumbnail))
  },[id])
  return (
      <List className={classes.root}>
        <ListItem><img style={{"height":"100px","borderRadius":"50px"}} src={photos} alt=""/></ListItem>
        <ListItem>name:{name}</ListItem>
        <ListItem>email:{email}</ListItem>
        <ListItem>body: {body}</ListItem>
      </List>
  );
};

export default withStyles({
  root: {
    width: '100%',
    margin: "1em",
    boxSizing: "border-box",
    border:"2px solid gray"
  }
})(Comments);