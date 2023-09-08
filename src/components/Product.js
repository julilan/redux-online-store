import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAppDispatch } from '../app/hooks';
import { addToCart } from '../features/cartSlice';

const Product = (props) => {
  const { image, title, description, price, category, rating } = props;
  const product = props;
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    console.log('Product: ', product);
    dispatch(addToCart(product));
  };

  return (
    <section className='Detail'>
      <article className='Detail_thumbnail'>
        <Card
          bg='light'
          style={{
            width: '16rem',
            height: '100%',
            padding: '1rem',
            margin: '1rem',
          }}
        >
          <Card.Img src={image} alt={title} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              {category}
            </Card.Subtitle>
            <Card.Text>{price} €</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Rating: {rating.rate}</Card.Text>
            <Button onClick={handleAddProduct} variant='primary'>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </article>
    </section>
  );
};

export default Product;
