import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./list-action";
// import types from './contacts-types';

const items = createReducer([], {
  [actions.addContacts]: (state, action) => [...state, action.payload],
  [actions.deleteContacts]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});
const filter = createReducer("", {
  [actions.filter]: (_, action) => action.payload,
});
// const items = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filter });
