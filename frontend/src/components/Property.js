import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

const Property = (props) => {
  const { property } = props;
 
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === property._id);
    // const quantity = existItem ? existItem.quantity + 1 : 1;
     const quantity = 7;
    const { data } = await axios.get(`/api/properties/${item._id}`);
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/properties/${property.slug}`}>
        <img
          src={property.image}
          className="card-img-top"
          alt={property.name}
        />
      </Link>
      <Card.Body>
        <Link to={`/properties/${property.slug}`}>
          <Card.Title>{property.name}</Card.Title>
        </Link>
        <Rating rating={property.rating} numReviews={property.numReviews} />
        <Card.Text>${property.price}</Card.Text>
        <Link to={`${property.url_BnB}`}>
          {/* <Link to={`/properties/${property.slug}`}></Link> */}
          <Button onClick={() => addToCartHandler(property)}>More Info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Property;
