import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  PhotoSearchbar,
  SearchForm,
  SearchFormBtn,
  Input,
} from './Searchbar.style';

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
      <PhotoSearchbar>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchFormBtn type="submit">
            <span>
              <BsSearch />
            </span>
          </SearchFormBtn>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.onInputChange}
          />
        </SearchForm>
      </PhotoSearchbar>
    );
  }
}
