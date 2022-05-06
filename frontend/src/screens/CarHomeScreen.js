import { useEffect, useReducer, useContext } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Car from '../components/Car';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
 

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, cars: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const CarHomeScreen = () => {
 const [{ loading, error, cars }, dispatch] = useReducer(reducer, {
   cars: [],
   loading: true,
   error: '',
 });

 const { state, dispatch: ctxDispatch } = useContext(Store);
 const { cart } = state;

 useEffect(() => {
   const fetchData = async () => {
     dispatch({ type: 'FETCH_REQUEST' });
     try {
       const result = await axios.get('/api/cars');

       dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
     } catch (err) {
       dispatch({ type: 'FETCH_FAIL', payload: err.message });
     }
   };
   fetchData();
 }, [state]);
 
  return (
    <div>
      <Helmet>
        <title>Cars</title>
      </Helmet>
      <h1>Featured Cars</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {cars.map((car) => (
              <Col key={car.slug} sm={6} md={4} lg={3} className="mb-3">
                <Car car={car}></Car>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default CarHomeScreen;
