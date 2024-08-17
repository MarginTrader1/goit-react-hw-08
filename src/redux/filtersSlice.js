import { createSlice } from "@reduxjs/toolkit";
import { mainState } from "./data";

const filterSlice = createSlice({
   name: "filter",
   initialState: mainState.filters,
   reducers: {
      changeFilter(state, action) {
         state.name = action.payload;
      },
   },
});

// генератор экшенов
export const { changeFilter } = filterSlice.actions;

// редюсер слайса
export const filterReducer = filterSlice.reducer;

//селектор
export const selectNameFilter = (state) => state.filter.name;
