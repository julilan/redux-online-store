import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { fetchProducts } from '../features/productsSlice';
import Product from './Product';

const List = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products.length < 1) dispatch(fetchProducts());
  }, [dispatch, products]);

  return (
    <div>
      <h1 className='text-center p-3 mt-2'>Products</h1>
      <div className='d-flex flex-wrap justify-content-center'>
        {products.map((product) => (
          // This is same as <Products image={product.image}, name {product.name} etc />
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default List;
