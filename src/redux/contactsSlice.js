import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice ({
    name: 'contacts',
    initialState: {
        items: [],
    },
    reducers: {
        addContact: {
            reducer(state, action){
                for (const item of state.items){
                    if (item.contact.name === action.payload.contact.name ){
                        alert (`${action.payload.contact.name} is already in contacts`); 
                        return;
                    }
                }
                state.items.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                    contact,
                    },
                };
            },
        },
        
        deleteContact: {
            reducer(state, action){
                const index = state.items.findIndex(
                item => item.contact.id === action.payload);
                state.items.splice(index, 1);  
            },
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

