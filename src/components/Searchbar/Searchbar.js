import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  onInputChange = e => {
    this.setState({ value: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);

    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.onFormSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
