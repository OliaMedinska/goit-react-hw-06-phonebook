import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        item: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    },
    reducers: {
        addContact: (state, action) => {
            state.item.push(action.payload);
        },
        deleteContact: (state, action) => {
            const deleteId = action.payload;
            state.item = state.item.filter(contact => contact.id !== deleteId);
        }
    },
});

export const {addContact, deleteContact} = contactsSlice.actions;

export default contactsSlice.reducer;