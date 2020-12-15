import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactsForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  repeatContact = (name, number) => {
    const { contacts } = this.state;

    const repeatNameAndNumber = !!contacts.find(
      contact => contact.name === name || contact.number === number,
    );

    return repeatNameAndNumber;
  };

  addContact = (name, number) => {
    const repeat = this.repeatContact(name, number);
    if (name.length < 2) {
      alert(`Текст должен быть не меньше 2 символов, сейчас ${name.length}`);
      return;
    }

    if (number.length < 5) {
      alert(`Номер должен быть не меньше 5 символов, сейчас ${number.length}`);
      return;
    }

    repeat
      ? alert(`${name} is already exist!`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));

    const contact = {
      id: uuidv4(),
      name,
      number,
    };
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContact();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm
          onAddSubmit={this.addContact}
          onRepeat={this.repeatContact}
        />
        <h2>Contact</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
