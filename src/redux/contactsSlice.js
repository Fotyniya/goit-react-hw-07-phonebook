import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
const controller = new AbortController();

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice ({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => builder
      .addCase(fetchContacts.pending, state => {state.isLoading = true;})
      .addCase(fetchContacts.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending )
      .addCase(addContact.fulfilled, (state, action) => {
        
        for (const item of state.items){
          if (item.name === action.payload.name ){
              alert (`${action.payload.name} is already in contacts`);
              controller.abort();
              state.isLoading = false;
              state.error = null; 
              return 
          } 
        }
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload); 
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1)})
      .addCase(deleteContact.rejected, handleRejected)
  });

export const contactsReducer = contactsSlice.reducer;