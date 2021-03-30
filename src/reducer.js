export const intialstate = {
  user: null,
};

export const actionType = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  if (action.type === "SET_USER") {
    const newState = { ...state, user: action.payload.user };
    return { ...newState };
  }
  return state;
};

export default reducer;
