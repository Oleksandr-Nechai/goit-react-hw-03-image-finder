import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ picture, onClick }) {
  return (
    <li className={styles.imageGalleryItem} onClick={() => onClick(picture.largeImageURL)}>
      <img
        src={picture.webformatURL}
        alt={picture.tags}
        className={styles.imageGalleryItem - image}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
