import { makeStyles, Typography } from "@material-ui/core";

import React from "react";
const useStyle = makeStyles({
  postListBodyStyle: {
    margin: "10px auto",
    padding: "15px 10px",
  },
});
const PostList = ({ post }) => {
  const classes = useStyle();
  return (
    <div className={classes.postListBodyStyle}>
      <Typography variant="h5" color="textSecondary">
        {post.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {post.body}
      </Typography>
    </div>
  );
};

export default PostList;
