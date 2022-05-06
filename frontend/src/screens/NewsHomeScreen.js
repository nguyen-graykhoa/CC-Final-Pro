import { useEffect, useReducer, useContext } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import News from '../components/News';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, news: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const NewsHomeScreen = () => {
 const [{ loading, error, news }, dispatch] = useReducer(reducer, {
   news: [],
   loading: true,
   error: '',
 });

 const { state, dispatch: ctxDispatch } = useContext(Store);
 const { cart } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/news');

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
        <title>News</title>
      </Helmet>
      <h1>Featured News</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {news.map((newsItem) => (
              <Col key={newsItem.slug} sm={6} md={4} lg={3} className="mb-3">
                <News newsItem={newsItem}></News>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default NewsHomeScreen;
