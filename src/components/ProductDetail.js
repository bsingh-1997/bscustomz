// // ProductDetail.js
// import React from 'react';
// const ProductDetail = ({ product }) => {
    //    const  imgsrsc = product.image
    //     console.log("img src",imgsrsc)
    //   return (
        //       <div>
        //         {/* <Header/> */}
        //         <h3 className='container '>BsCustomz</h3>
        //         <div>
//         <div>

//       <h2>{product.name}</h2>
//       <img style={{"height":"50vh" , "display":"flex" , "margin":"auto"}} src={`./${imgsrsc}`} alt='https://th.bing.com/th/id/OIP.TZLn8PFtCV5snIS1EfqidQHaEK?pid=ImgDet&rs=1' />
//         </div>
//         <div>
//       {/* <h2>{product.name}</h2> */}
//       <p>{product.title}</p>
//         <h2>Product Description</h2>
//       <p>{product.description}</p>
//         </div>

//         </div>
//     </div>
//   );
// };

// export default ProductDetail;

// ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json'; // Import your product data
import Header from './Header'
import Footer from './Footer';

function ProductDetail() {
    
    const { productName } = useParams();
    console.log("recived product name ,", productName)
  // Find the product with the matching productId
  const product = data.find((p) => p.name === productName);

  if (!product) {
    return <div>Product not found</div>;
  }
  
  // Render product details
  return (
      <div>
        <Header/>
        {/* <h3 style={{color:"orange",width:"90%",marginLeft:"auto",marginRight:"auto"}}>BsCustomz</h3> */}
        <div style={{width:"93%",marginLeft:"auto",marginRight:"auto"}}>

    <img style={{"width":"60vw" , "display":"flex" , "margin":"auto"}} src={`./${product.image}`} alt='https://th.bing.com/th/id/OIP.TZLn8PFtCV5snIS1EfqidQHaEK?pid=ImgDet&rs=1' />
      <br></br>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <br></br>
      {product.description && <p>Product Description <hr></hr>{product.description}</p>} {/* Conditional rendering for description */}
      {/* Add other product details as needed */}
      {/* Display other product details */}
        </div>
        <Footer/>
    </div>
  );
}

export default ProductDetail;
