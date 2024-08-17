import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// структура ассинхронного запроса на сервер
// redux-toolkit примеры для createAsyncThunk

const setAuthHeader = (token) => {
   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
   axios.defaults.headers.common.Authorization = "";
};

//регистрация юзера
export const register = createAsyncThunk("auth/register", async (user, thunkAPI) => {
   try {
      const response = await axios.post("/users/signup", user);
      setAuthHeader(response.data.token);
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

//login юзера
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
   try {
      const response = await axios.post("/users/login", user);
      setAuthHeader(response.data.token);
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

//login юзера
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
   try {
      await axios.post("/users/logout");
      clearAuthHeader();
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

//оновлення юзера
export const refreshUser = createAsyncThunk(
   "auth/refresh",
   async (_, thunkAPI) => {
      try {
         // читаем редакс state с помощью метода thunkAPI getState
         const reduxState = thunkAPI.getState();
         const token = reduxState.auth.token;
         setAuthHeader(token);

         const response = await axios.get("/users/current");
         return response.data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error.message);
      }
   },

   // третий аргумент для thunkAPI - condition (условие)
   {
      condition: (_, thunkAPI) => {
         // если token !== null (т.е. true), то запрос на сервер будет выполнен
         const reduxState = thunkAPI.getState();
         return reduxState.auth.token !== null;
      },
   }
);
