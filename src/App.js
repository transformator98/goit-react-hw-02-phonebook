import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    console.log('name', name);
    console.log('number', number);
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <h1>phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handleInputChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2>contact</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li>
              <p>
                {contact.name}: {contact.number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
