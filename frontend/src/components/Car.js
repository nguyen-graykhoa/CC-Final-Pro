import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

const Car = (props) => {
  const { car } = props;
 console.log(car)
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === car._id);
     
    const quantity = 2;
    const { data } = await axios.get(`/api/cars/${item._id}`);
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/cars/${car.slug}`}>
        <img src={car.image} className="card-img-top" alt={car.name} />
      </Link>
      <Card.Body>
        <Link to={`/cars/${car.slug}`}>
          <Card.Title>{car.name}</Card.Title>
        </Link>
        <Rating rating={car.rating} numReviews={car.numReviews} />
        <Card.Text>${car.price}</Card.Text>
        <Link to={`/cars/${car.slug}`}>
          {/* <Link to={`/properties/${car.slug}`}></Link> */}
          <Button onClick={() => addToCartHandler(car)}>More Info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Car;
