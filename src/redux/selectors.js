export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter.toLowerCase();
export const selectFilteredContact = state => {
  return selectContacts(state).filter(contact =>
    contact.name.includes(selectFilter(state))
  );
};
