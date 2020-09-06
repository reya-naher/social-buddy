import React from 'react';
import {Card, CardContent,Button,Typography} from '@material-ui/core';
import {  useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const Posts = (props) => {
  const { classes } = props
  const {id,userId,title} = props.post
  //console.log(props.post);
  const history = useHistory();
  const handleClick = (userId) => {
    const url = `/posts/detail/${userId}`
    history.push(url)
  }
//   const divStyle = {
//     border: "5px solid gray",
//     padding: "10px",
//     margin: "10px"
//   }
  
//   return (
//     <div style={divStyle}>
//         <h1>UserId: {userId}</h1>
//         <h2>Id: {id}</h2>
//         <p>Title: {title}</p>
//         <button post={props.post} onClick={() => handleClick(id)}>See More</button>
        

//     </div>
//   );
// };

// export default Posts;
return ( 
  <Card className={classes.item}>
    <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
            UserId: {userId}
          </Typography>
    <Typography variant="h5" component="p">
    Id: {id}
      </Typography>
      <Typography variant="body2" component="p">
     {title}
      </Typography>
      <br />
      <Button variant="contained" color="primary" onClick={() => handleClick(id)}>See More</Button>
      </CardContent>
      </Card>  
);
};
export default withStyles({
  item: {
    width: "350px",
    margin: "1em",
    boxSizing: "border-box",
    color: "#0A7F34",
    textAlign:"center"
    
  }
})(Posts);