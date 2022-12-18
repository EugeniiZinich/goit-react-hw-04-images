import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { GalleryItem, ImgGallery } from './ImageGalleryItem.style';

export default function ImageGalleryItem(gallery) {
  const [showModal, setShowModal] = useState(false);

  const { id, webformatURL, largeImageURL, tag } = gallery;

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <GalleryItem key={id}>
        <ImgGallery
          id={id}
          src={webformatURL}
          alt={tag}
          onClick={toggleModal}
        />
      </GalleryItem>
      {showModal && (
        <Modal modalImg={largeImageURL} toggleModal={toggleModal} />
      )}
    </>
  );
}

// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//     modalImg: '',
//   };

//   toggleModal = () => {
//     this.setState({
//       showModal: !this.state.showModal,
//     });
//   };

//   render() {
//     const { id, webformatURL, largeImageURL, tag } = this.props;
// return (
//   <>
//     <GalleryItem key={id}>
//       <ImgGallery
//         id={id}
//         src={webformatURL}
//         alt={tag}
//         onClick={this.toggleModal}
//       />
//     </GalleryItem>
//     {this.state.showModal && (
//       <Modal modalImg={largeImageURL} toggleModal={this.toggleModal} />
//     )}
//   </>
// );
//   }
// }

// export default ImageGalleryItem;
