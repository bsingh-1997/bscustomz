import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Items from './components/items';
import Home from './components/Home';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
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
             {/* <Route path="/service" element={<Service/>}></Route> */}
          </Routes>
    </div>
  );
}

export default App;
