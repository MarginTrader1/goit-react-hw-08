import { selectNameFilter } from "../filters/selectors";

import { createSelector } from "@reduxjs/toolkit";

// селекторы
export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;

// складна функция-селектор = массив зависимостей + колбэк
export const selectFilteredContacts = createSelector(
   // в зависимости передаем простые функции-селекторы
   [selectContacts, selectNameFilter],

   // в аргументы колбэка передаем результат выполнения простых селекторов
   (contacts, filter) => {
      //фильтруем контакты через фильтр
      const filteredContacts = contacts.filter((item) =>
         item.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
   }
);
