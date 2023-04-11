import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const controller = new AbortController();

axios.defaults.baseURL = "https://642db56c66a20ec9cea46bfd.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name: contact.name, phone: contact.number }, {signal: thunkAPI.signal});
      console.log(response.data);
      controller.signal()
      return response.data;
    
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);