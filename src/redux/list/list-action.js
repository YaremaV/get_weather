import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// import types from './contacts-types';

const addContacts = createAction("contacts/add", (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});
const deleteContacts = createAction("contacts/delete");
const filter = createAction("contacts/filter");

// const addContacts = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContacts = contactsId => ({
//   type: types.DELETE,
//   payload: contactsId,
// });

// const filter = value => ({
//   type: types.FILTER,
//   payload: value,
// });

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContacts, filter };
