import axios from "axios";
import toast from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";

// структура ассинхронного запроса из библиотеки
// redux-toolkit примеры для createAsyncThunk
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
   try {
      const url = "https://connections-api.goit.global/contacts";
      const response = await axios.get(url);
      return response.data;
   } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
   }
});

// додавання контакту
export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
   try {
      const url = "https://connections-api.goit.global/contacts";
      const response = await axios.post(url, contact);
      toast.success("Сontact successfully added!");
      return response.data;
   } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
   }
});

// видалення контакту
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
   try {
      const url = `https://connections-api.goit.global/contacts/${id}`;
      const response = await axios.delete(url);
      toast.success("Сontact successfully deleted!");
      return response.data;
   } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
   }
});
