const initialState = {
  apiData: [],
};
export const PostApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return { apiData: action.payload };
    }
    default:
      return state;
  }
};
