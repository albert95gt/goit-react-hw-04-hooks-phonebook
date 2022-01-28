import React, { Component } from 'react';
import { nanoid } from 'nanoid'

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
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts')
    const parsedSavedContacts = JSON.parse(savedContacts);
    if (parsedSavedContacts) {
      
      this.setState({
        contacts: parsedSavedContacts,
      })
    }
  }
  
  
  onSubmitForm = ({ name, number }) => {
    
  const { contacts } = this.state;
  
  const searchContact = contacts.some(contact => {
  return  contact.name.toLowerCase().includes(name.toLowerCase())
  })

  if(searchContact){
    alert(`${name} is alredy in contacts!!!`)
    return
  }

  this.setState(({ contacts }) => {
    return {
      contacts: [
        ...contacts,
        {
          id: nanoid(4),
          name: name,
          number: number,
        },
      ],
    };
  });
  }

  handleChange = event => {
    const filterInputValue = event.currentTarget.value;
    const trimedFilterInputValue = filterInputValue.trim();
    
    this.setState({filter: trimedFilterInputValue});
  }

  filteringContacts = () => {
    const { contacts, filter } = this.state;

   return contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()));
    
  }

  onDeleteContacts = (name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name
      )
    }))
    
  }
  
  render() { 
    const { contacts } = this.state;
    return (
      <Wrapper>
        <PageTitle>Phonebook</PageTitle>

          <ContactForm contacts={contacts}
            onSubmit={this.onSubmitForm}
          />
          <ContactsTitle>Contacts</ContactsTitle>
          
          <Filter onChange={this.handleChange}/>
          
          <ContactList filteredContacts={this.filteringContacts()} onDeleteContacts={this.onDeleteContacts}/>
      </Wrapper>
    );
  }
}
 
export default App;



