import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from '../Searchbar/Searchbar';
import FetchPicture from 'components/ApiSevise/FetchPicture';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import { Container } from 'components/Container/Container.style';
import MyLoader from 'components/Loader/Loader';

export default class App extends Component {
  state = {
    value: '',
    page: 1,
    picture: [],
    showModal: false,
    isLoading: false,
    showBtn: false,
  };

  async componentDidUpdate(_, prevState) {
    const { value, page } = this.state;

    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({
          isLoading: true,
        });
        const response = await FetchPicture(value, page);
        this.setState(prevState => ({
          picture: [...prevState.picture, ...response],
        }));
        if (response.length > 0) {
          this.setState({
            showBtn: true,
          });
        }
      } catch {
        toast.error('Ooops, try restart page');
      } finally {
        this.setState({
          isLoading: false,
        });
      }
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
      showBtn: false,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery gallery={this.state.picture} />
        <Container>
          {this.state.showBtn && <Button loadMore={this.loadMore} />}
          {this.state.isLoading && <MyLoader />}
        </Container>

        <Toaster />
      </>
    );
  }
}
