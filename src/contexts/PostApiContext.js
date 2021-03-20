import { createContext, useReducer } from "react";
import { PostApiReducer } from "../reducers/PostApiReducer";

export const PostApiContext = createContext();
export const PostApiContextProvider = (props) => {
  const [state, dispatch] = useReducer(PostApiReducer, { apiData: [] });
  return (
    <PostApiContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PostApiContext.Provider>
  );
};
