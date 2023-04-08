export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filterQuery.filter; 
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFiltredContacts = (state) => {
    const filter = selectFilter(state);
    const contacts = selectContacts(state);
    const filtredContacts = contacts
    .filter(item => (item.name).toUpperCase().includes((filter).toUpperCase()));
    return filtredContacts;
}


        
