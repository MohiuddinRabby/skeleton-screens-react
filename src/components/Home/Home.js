import React, { useContext, useEffect, useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { PostApiContext } from "../../contexts/PostApiContext";
import PostList from "../PostsList/PostList";
import CustomSkeletonBody from "../../CustomSkeletons/CustomSkeletonBody";
const useStyle = makeStyles({
  homeContainer: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  skel: {
    marginTop: "30px",
  },
});
const Home = () => {
  const classes = useStyle();
  const { state, dispatch } = useContext(PostApiContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "GET_DATA", payload: data });
          setLoading(false);
        });
    }, 3000);
  }, [dispatch]);
  return (
    <Container maxWidth="xl" className={classes.homeContainer}>
      <Typography variant="h4" color="textSecondary">
        Posts
      </Typography>
      {loading
        ? [1, 2, 3, 4, 5].map((skel) => <CustomSkeletonBody key={skel} />)
        : state.apiData.map((post) => (
            <PostList key={post.id} post={post}></PostList>
          ))}
    </Container>
  );
};

export default Home;
