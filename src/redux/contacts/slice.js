import { createSlice } from "@reduxjs/toolkit";

import { mainState } from "../data";
import { fetchContacts, addContact, deleteContact } from "./operations";


const handlePending = (state, action) => {
   state.loading = true;
};

const handleRejected = (state, action) => {
   state.loading = false;
   state.error = action.payload;
};

const contactsSlice = createSlice({
   name: "contacts",
   initialState: mainState.contacts,
   extraReducers: (builder) => {
      builder
         // блок для першого запиту
         .addCase(fetchContacts.pending, handlePending)
         .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
         })
         .addCase(fetchContacts.rejected, handleRejected)
         
         // блок додавання контакту
         .addCase(addContact.pending, handlePending)
         .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = [...state.items, action.payload];
         })
         .addCase(addContact.rejected, handleRejected)

         // блок выдалення контакту
         .addCase(deleteContact.pending, handlePending)
         .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter((item) => item.id !== action.payload.id);
         })
         .addCase(deleteContact.rejected, handleRejected);
   },
});

// редюсер слайсу
export const contactsReducer = contactsSlice.reducer;


