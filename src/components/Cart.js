import React from 'react';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../app/hooks';
import CardProduct from './CardProduct';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.cart);
  console.log('CartItems: ', cartItems);

  return (
    <Container>
      <h1>Cart</h1>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.map((item) => (
        <CardProduct {...item} />
      ))}
    </Container>
  );
};

export default Cart;
