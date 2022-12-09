import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    value: '',
  };

  onSubmit = value => {
    this.setState({
      value,
    });
  };

  render() {
    return <Searchbar onSubmit={this.onSubmit} />;
  }
}
