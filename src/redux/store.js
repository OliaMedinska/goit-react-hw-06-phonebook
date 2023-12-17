import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersSlice from "./filtersSlice";

export const store = configureStore({
  reducer:{
    contacts: contactsReducer,
    filter: filtersSlice,
  },
});