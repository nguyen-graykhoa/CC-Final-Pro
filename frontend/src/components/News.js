import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

const News = (props) => {
  const { newsItem } = props;
  console.log(newsItem);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === newsItem._id);

    const quantity = 2;
    const { data } = await axios.get(`/api/news/${newsItem._id}`);
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...newsItem, quantity },
    });
  };

  return (
    <Card className='scroll'>
      <Link to={`/news/${newsItem.slug}`}>
        <img src={newsItem.image} className="card-img-top" alt={newsItem.name} />
      </Link>
      <Card.Body>
        <Link to={`/news/${newsItem.slug}`}>
          <Card.Title>{newsItem.title}</Card.Title>
        </Link>       
        <Card.Text>${newsItem.description}</Card.Text>
        <Link to={`/news/${newsItem.slug}`}>
          <Button onClick={() => addToCartHandler(newsItem)}>More Info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
