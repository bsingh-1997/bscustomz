import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Items from './components/items';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className='container'>
      <Header titlex="BsCustomz"/>
      {/* <>Items/> */}
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
