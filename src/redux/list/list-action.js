import { createAction } from "@reduxjs/toolkit";

const addList = createAction("list/add", (newEl) => {
  return {
    payload: newEl,
  };
});
const deleteList = createAction("list/delete");

// eslint-disable-next-line import/no-anonymous-default-export
export default { addList, deleteList };
