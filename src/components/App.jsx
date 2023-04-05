import { GlobalStyle } from "GlobalStyle";
import { ContactsForm } from "./ContactsForm/contactsForm";
import { ContactsList } from "./contactsList";
import { Filter } from "./Filter/filter";
import { Layout } from "./Layout";

export const App = () => {

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Layout>
  );
};
