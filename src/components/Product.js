import React from 'react';

const Product = (props) => {
  const { image, title } = props;

  return (
    <section>
      <article className='Detail_thumbnail'>
        <img src={image} alt={title} />
      </article>
    </section>
  );
};

export default Product;
