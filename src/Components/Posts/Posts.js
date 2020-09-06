import React from 'react';
import { Card, CardContent, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const Posts = (props) => {
  const { classes } = props
  const { id, title } = props.post
  //console.log(props.post);
  const history = useHistory();
  const handleClick = (userId) => {
    const url = `/posts/detail/${userId}`
    history.push(url)
  }

  return (
    <Card className = {classes.root}>
      <CardContent className = {classes.cardSize}>
        <Typography variant = "h6" component = "h6">
          ID : {id}
        </Typography>
        <Typography variant = "body1" component = "p">
          {title}
        </Typography>
      </CardContent>
      <Button className={classes.btnCustom} variant="contained"
        onClick = {() => handleClick(id)}> See More </Button>
    </Card>
  );
};
export default withStyles({
  root: {
    width: "350px",
    margin: "1em",
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "#e4f0ee",
    boxShadow: "3px 4px 10px"
  },
  btnCustom: {
    backgroundColor: "#0b7b67",
    margin: "20px 0px"
  },
  cardSize: {
    height: "60px"
  }
})(Posts);