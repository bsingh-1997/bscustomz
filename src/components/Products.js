import React from 'react';
import productData from './data.json';
import './prod.css'
import Footer from './Footer';
import Header from './Header';
const Products = () => {
  // Organize products by category
  const productsByCategory = productData.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <>
    <Header/>
    <div className="products-container">
      {Object.entries(productsByCategory).map(([category, products]) => (
        <div key={category} className="category-container">
          <h2>{category}</h2>
          <div className="product-list">
            {products.map((product, index) => (
              <div key={index} className="product-item">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <Footer/>
      </>
  );
};

export default Products;
