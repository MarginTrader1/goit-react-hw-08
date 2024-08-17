import axios from "axios";
import toast from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// тост для добавления контакта
const notifyAdded = () => toast.success("Сontact successfully added!");
const notifyDeleted = () => toast.success("Сontact successfully deleted!");

// структура ассинхронного запроса из библиотеки
// redux-toolkit примеры для createAsyncThunk
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
   try {
      const response = await axios.get("/contacts");
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

// додавання контакту
export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
   try {
      const response = await axios.post("/contacts", contact);
      notifyAdded();
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

// видалення контакту
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
   try {
      const response = await axios.delete(`/contacts/${id}`);
      notifyDeleted()
      return response.data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});
