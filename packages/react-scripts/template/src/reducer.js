const initialState = {
  number: 0
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const selectors = {
  getNumber: (state) => state.number,
}

const actionCreators = {
  increment: () => {
    return {
      type: INCREMENT
    }
  },
  decrement: () => {
    return {
      type: DECREMENT
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return Object.assign({}, {number: state.number + 1});
    }
    case DECREMENT: {
      return Object.assign({}, {number: state.number - 1});
    }
    default: {
      return state;
    }
  }
}

export default reducer;
export {
  initialState,
  selectors,
  actionCreators
}

