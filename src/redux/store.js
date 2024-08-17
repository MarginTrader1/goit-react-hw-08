import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
   // стор создают редюсеры из слайсов
   reducer: {
      auth: authReducer,
      contacts: contactsReducer,
      filter: filterReducer,
   },
});
