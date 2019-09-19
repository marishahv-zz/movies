import {
  ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, FILTER_CONTACTS, CLEAR_FILTER,
  INIT_STATE,
} from '../constants/constants';

export const initState = movies => ({
  type: INIT_STATE,
  payload: [...movies],
});


// ////////////////////////
export const addContact = contact => ({
  type: ADD_CONTACT,
  payload: { ...contact },
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: { id },
});

export const editContact = contact => ({
  type: EDIT_CONTACT,
  payload: { ...contact },
});

export const filterContact = searchValue => ({
  type: FILTER_CONTACTS,
  payload: searchValue,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});
