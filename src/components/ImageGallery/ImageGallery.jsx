import styles from './ImageGallery.module.css';
import PropTypes from '.prop-types';
import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ pictures, onClick }) {
  const element = pictures.map(picture => (
    <ImageGalleryItem onClick={onClick} picture={picture} key={picture.id} {...picture} />
  ));
  return <ul className={styles.imageGallery}>{element}</ul>;
}
ImageGallery.propTypes = {
  pictures: PropTypes.array,
  onClick: PropTypes.func,
};

export default ImageGallery;
