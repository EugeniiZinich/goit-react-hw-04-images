import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import Searchbar from '../Searchbar/Searchbar';
import FetchPicture from 'components/ApiSevise/FetchPicture';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import { Container } from 'components/Container/Container.style';
import { Audio } from 'react-loader-spinner';

export default class App extends Component {
  state = {
    value: '',
    page: 1,
    picture: [],
    showModal: false,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { value, page } = this.state;
    // this.setState({
    //   isLoading: true,
    // });
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      try {
        const response = await FetchPicture(value, page);
        this.setState(prevState => ({
          picture: [...prevState.picture, ...response],
        }));
      } catch (error) {}
    }
  }

  onSubmit = value => {
    this.setState({
      value,
      page: 1,
      picture: [],
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery gallery={this.state.picture} />
        <Container>
          {this.state.picture.length > 0 && <Button loadMore={this.loadMore} />}
          {this.state.isLoading && (
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="three-dots-loading"
              wrapperStyle
              wrapperClass
            />
          )}
        </Container>

        <Toaster />
      </>
    );
  }
}
