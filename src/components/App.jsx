import { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm.jsx';
 import { Filter } from './ContactForm/Filter.jsx';
  import { ContactList } from './ContactForm/ContactList.jsx';
  import contacts from './path/contacts.json';
// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createContact = contact => {
    this.setState(prevState =>({
      contacts: [...prevState.contacts, contact, ...contacts],
    }));
    console.log('contacts :>> ', this.contacts);
  };

  // removeContact = (contactId) => {
  //   this.setState(prevState =>{
  //     contacts: prevState.contacts.filter(({id})=> id !== contactId)
  //   })
  // }

  changeFilter = (filter) => {
    this.setState({ filter, })
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    // const filteredContacts = this.filteredContacts();


    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm  onSubmit={this.createContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter}/>
        <ContactList contacts={contacts} onDelet={this.removeContact}
         /> 
      </div>
    );
  }
}
