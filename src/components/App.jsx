import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Contacts } from './Base.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { getContacts, getError, getIsLoading } from 'redux/selector';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  const store = useSelector(state => state);
  console.log(store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && !error}
      {contacts.length > 0 && !isLoading && (
        <div>
          <Contacts>Contacts</Contacts>
          <Filter />
          <ContactList />
        </div>
      )}
    </Container>
  );
};
