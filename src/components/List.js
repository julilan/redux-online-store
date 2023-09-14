import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProducts } from '../features/productsSlice';
import Product from './Product';

const List = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart);

  useEffect(() => {
    if (products.length < 1) dispatch(fetchProducts());
  }, [dispatch, products]);

  return (
    <div>
      <h1 className='text-center p-3'>Products List</h1>
      <div className='d-flex flex-row flex-wrap'>
        {products.map((product) => (
          // This is same as <Products image={product.image}, name {product.name} etc />
          <Product key={product.id} {...product} cartItems={cartItems} />
        ))}
      </div>
    </div>
  );
};

export default List;
