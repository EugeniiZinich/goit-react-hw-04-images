import { LoadMore } from './Button.style';

const Button = ({ loadMore }) => {
  return (
    <LoadMore type="button" onClick={loadMore}>
      Load more
    </LoadMore>
  );
};

export default Button;
