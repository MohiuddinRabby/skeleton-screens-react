import { Typography } from "@material-ui/core";

import React from "react";

const PostList = ({ post, loading }) => {
  return (
    <Typography variant="subtitle1" color="textSecondary">
      { post.body}
      <hr />
    </Typography>
  );
};

export default PostList;
