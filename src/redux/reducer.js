import * as actionTypes from "./actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      return [...state, Object.assign({}, action.card)];
    case actionTypes.REMOVE_CARD:
      return state.filter((_data, i) => i !== action.id);
    default:
      return state;
  }
};
