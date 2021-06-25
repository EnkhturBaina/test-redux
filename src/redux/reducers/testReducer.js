const defaultState = {
  value: 0
};

const testReducer = (state = defaultState, action) => {
  console.log("state", state);
  console.log("action", action);

  if (action.type === "INCREASE_NUMBER") {
    return {
      value: state.value + 1
    };
  } else if (action.type === "DECREASE_NUMBER") {
    return {
      value: state.value - 1
    };
  }
  return state;
};

export default testReducer;
