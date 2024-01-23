import data from "./components/data.json" 

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Items from './components/items';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
import Products from "./components/Products";
function App() {
  return (
    <div  >
      {/* <Header titlex="BsCustomz"/> */}
      {/* <>Items/> */}
      {/* <Home/> */}
      {/* <Footer/> */}
      {/* <ContactForm/> */}
      <Routes>
             <Route path="/" element={<Home/>} ></Route>
             <Route path="/about" element={<About/>} ></Route>
             <Route path="/contact" element={<ContactForm/>} ></Route>
             <Route path="/products" element={<Products/>} ></Route>

             {/* {data.map((product) => (
          <Route
            key={product.name} // Assuming your product data has a unique identifier
            path={`/product/${product.name}` } element={<ProductDetail product={product} />}
            // render={() => <ProductDetail product={product} />}
            
          />
        ))} */}
           <Route path="/product/:productName" element={<ProductDetail />} />

          </Routes>
    </div>
  );
}

export default App;
