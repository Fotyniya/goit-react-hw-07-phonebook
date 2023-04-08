import { GlobalStyle } from "GlobalStyle";
import { ContactsForm } from "./ContactsForm/contactsForm";
import { ContactsList } from "./contactsList";
import { Filter } from "./Filter/filter";
import { Layout } from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Layout>
  );
};
