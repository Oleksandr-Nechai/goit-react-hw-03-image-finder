import styles from './Button.module.css';
import propTypes from 'prop-types';

function Button({ onClick }) {
  return (
    <div className={styles.section}>
      <button className={styles.button} onClick={onClick}>
        Loading
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: propTypes.func,
};
export default Button;
