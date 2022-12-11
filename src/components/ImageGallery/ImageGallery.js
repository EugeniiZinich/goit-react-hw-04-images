import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.style';

const ImageGallery = ({ gallery }) => {
  return (
    <GalleryList>
      {gallery.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </GalleryList>
  );
};

export default ImageGallery;
