import React from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { PostApiContextProvider } from "./contexts/PostApiContext";

const App = () => {
  return (
    <>
      <PostApiContextProvider>
        <Nav />
        <Home />
      </PostApiContextProvider>
    </>
  );
};

export default App;
