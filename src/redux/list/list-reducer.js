import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./list-action";

const items = createReducer([], {
  [actions.addList]: (state, action) =>
    state.some((value) => value.name.includes(action.payload.name))
      ? alert(`${action.payload.name} is already in list`)
      : [...state, action.payload],

  [actions.deleteList]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

export default combineReducers({ items });
