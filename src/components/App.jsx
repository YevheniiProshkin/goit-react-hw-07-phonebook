import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Contacts } from './Base.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Contacts>Contacts</Contacts>
      <Filter />
      <ContactList />
    </Container>
  );
};
