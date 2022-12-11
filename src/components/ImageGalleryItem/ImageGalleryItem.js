import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { GalleryItem, ImgGallery } from './ImageGalleryItem.style';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    modalImg: '',
  };

  toggleModal = e => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { id, webformatURL, largeImageURL, tag } = this.props;
    return (
      <>
        <GalleryItem key={id}>
          <ImgGallery
            id={id}
            src={webformatURL}
            alt={tag}
            onClick={this.toggleModal}
          />
        </GalleryItem>
        {this.state.showModal && (
          <Modal modalImg={largeImageURL} toggleModal={this.toggleModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
