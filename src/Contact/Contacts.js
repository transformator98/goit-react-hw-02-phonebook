import { Component } from 'react';

class Contacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();
    this.props.onAddSubmit(name, number);
    this.props.onRepeat(name, number);

    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
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
            type="number"
            name="number"
            value={number}
            onChange={this.handleInputChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Contacts;
