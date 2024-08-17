import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";

export const store = configureStore({
   // стор создают редюсеры из слайсов
   reducer: {
      contacts: contactsReducer,
      filter: filterReducer,
   },
});
