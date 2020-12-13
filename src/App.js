import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
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
          <li className="a">Rosie Simpson</li>
          <li className="a">Rosie Simpson</li>
          <li className="a">Rosie Simpson</li>
        </ul>
      </div>
    );
  }
}

export default App;
