import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import { Wrapper, PageTitle, ContactsTitle } from './App.styled';

// const initialValues = [
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ]
const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitForm = ({ name, number }) => {
    const searchContact = contacts.some(contact => {
      return contact.name.toLowerCase().includes(name.toLowerCase());
    });

    if (searchContact) {
      toast.error(`${name} is alredy in contacts!!!`);
      return;
    }
    setContacts([
      ...contacts,
      {
        id: nanoid(4),
        name,
        number,
      },
    ]);
  };

  const handleChange = event => {
    const filterInputValue = event.currentTarget.value;
    const trimedFilterInputValue = filterInputValue.trim();
    setFilter(trimedFilterInputValue);
  };

  const filteringContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const onDeleteContacts = name => {
    setContacts(contacts.filter(contact => contact.name !== name));
  };

  return (
    <Wrapper>
      <PageTitle>Phonebook</PageTitle>
      <ToastContainer theme="colored" />
      <ContactForm contacts={contacts} onSubmit={onSubmitForm} />
      <ContactsTitle>Contacts</ContactsTitle>

      <Filter onChange={handleChange} />

      <ContactList
        filteredContacts={filteringContacts()}
        onDeleteContacts={onDeleteContacts}
      />
    </Wrapper>
  );
};

export default App;
