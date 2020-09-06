import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const Comments = (props) => {
  const { classes } = props;
  const { id, name, email, body } = props.comment;
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => setPhotos(data.results[0].picture.large))
  }, [id])
  return (
    <Card className = {classes.root}>
      <CardContent>
        <Grid container item xs = {12}>
          <Grid item xs = {2}>
            <Box ml = {8}>
              <img style = {{ "height": "100px", "borderRadius": "50%" }} src = {photos} alt = "" />
            </Box>
          </Grid>
          <Grid item xs = {10}>
            <Typography variant="h6" component="h6">Name: {name}
            </Typography>
            <Typography variant="h6" component="h6">Email: {email}
            </Typography>
            <Typography variant="body1" gutterBottom>Comment: {body}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default withStyles({
  root: {
    margin: "20px",
    boxSizing: "border-box",
    backgroundColor: "#EEF3F0"
  }
})(Comments);