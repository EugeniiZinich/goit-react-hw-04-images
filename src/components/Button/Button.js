import { LoadMore } from './Button.style';
import PropTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <LoadMore type="button" onClick={loadMore}>
      Load more
    </LoadMore>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};

export default Button;
