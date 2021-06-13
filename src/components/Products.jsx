import React from 'react';
import Product from './Product';
import '../styles/components/Products.css';

const Products = ({ products }) => (
  <div className="Products">
    <div className="Products-items">
      {products.map((e) => (
        <Product key={e.id} product={e} />
      ))}
    </div>
  </div>
);

export default Products;
