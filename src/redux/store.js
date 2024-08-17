import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
   // стор создают редюсеры из слайсов
   reducer: {
      contacts: contactsReducer,
      filter: filterReducer,
   },
});
