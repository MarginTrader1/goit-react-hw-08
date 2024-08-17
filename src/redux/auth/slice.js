import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const initialData = {
   user: {
      name: null,
      email: null,
   },
   token: null,
   isLoggedIn: false,
   isRefreshing: false,
};

const authSlice = createSlice({
   name: "auth",
   initialState: initialData,
   extraReducers: (builder) => {
      builder
         // блок для региcтрации
         .addCase(register.pending, (state, action) => {})
         .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
         })
         .addCase(register.rejected, (state, action) => {})

         // блок для log in
         .addCase(login.pending, (state, action) => {})
         .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
         })
         .addCase(login.rejected, (state, action) => {})

         // блок для log out
         .addCase(logout.pending, (state, action) => {})
         .addCase(logout.fulfilled, (state, action) => {
            state.user = initialData.user;
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
         })
         .addCase(logout.rejected, (state, action) => {})

         // блок для refreshUser
         .addCase(refreshUser.pending, (state, action) => {})
         .addCase(refreshUser.fulfilled, (state, action) => {})
         .addCase(refreshUser.rejected, (state, action) => {});
   },
});

// редюсер слайсу
export const authReducer = authSlice.reducer;
