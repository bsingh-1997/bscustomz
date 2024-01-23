import './Home.css'
import React, { useEffect, useState } from 'react'
import data from "./data.json"
import imging from './IMG_9971.jpg'
import light from './lights.JPG'
import vsn1 from './alloys/vsn1.JPG'
import vsn2 from './alloys/vsn2.JPG'
import vsn3 from './alloys/vsn3.JPG'
import vsn4 from './alloys/vsn4.JPG'
import vsn5 from './alloys/vsn5.JPG'
import vsn6 from './alloys/vsn6.JPG'
import bp from './bp.JPG'
import elec from './elec.JPG'
import ext from './exter.JPG'
import int from './int.JPG'
import pfm from './prformnc.JPG'
import oth from './other.JPG'
import vd from './vd.JPG'
import wheels from './wheels.JPG'
import rpp from './rpp.JPG'
import Header from './Header';
import Footer from './Footer';
import Alert from './Alert';
import ProductDetail from './ProductDetail';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
// import imgimg from './items/CMS5144_1.jpg'
export default function Home() {
  // console.log(data)
  // Group products by category
  const uniqueCategories = Array.from(new Set(data.map((cat) => cat.category)));
  const groupedProducts = data.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    AOS.init({duration:2000})
    console.log("search query")
    const lowercaseQuery = searchQuery.toLowerCase();
    // const filtered = data.filter(item =>
    //   item.name.toLowerCase().includes(lowercaseQuery) ||
    //   item.title.toLowerCase().includes(lowercaseQuery)
    // );
    const filtered = data.filter(item =>
      (item.name && item.name.toLowerCase().includes(lowercaseQuery)) ||
      (item.title && item.title.toLowerCase().includes(lowercaseQuery))
    );

    setFilteredData(filtered);
  // }, []
  }, [searchQuery],[]
  
  
  );






  const [selectedProduct, setSelectedProduct] = useState(null);

  // const handleProductClick = (product) => {
  //   setSelectedProduct(product);
  //   console.log(selectedProduct.title)

  //   // Open a new tab with the ProductDetail component
  //   const newTab = window.open('', '_blank');
  //   newTab.document.body.innerHTML = `
  //     <div id="product-detail"></div>
  //   `;

  //   ReactDOM.render(
  //       <ProductDetail product={selectedProduct} />
  //     ,
  //     newTab.document.getElementById('product-detail')
  //   );
  // };





  return (
    <div>
      <div className='topbar'>
        <>+91 98XXX XXXXX</>
      </div>
      <Header searchbar={true} setSearchQuery={setSearchQuery} />
      <Alert />
      {!searchQuery ? <>
      <div className='herocomp ' data-aos='fade'>
        <div className='headingg animation' ><h1 className='h1h1 animation' data-aos='fade-right'>
          Bs Customz
          </h1>
          <h4 data-aos='fade-right'>
            Automotive Parts
            </h4>
            <br></br>
            <br></br>
            <br></br>
          <p data-aos='fade-right'>Welcome to BsCustomz - Your Ultimate Destination for Automotive Excellence! 🚀</p>

          <div class="frm">
    {/* <label for="contact-form-email"></label> */}
    <input id="contact-form-email" class="form-input" type="email" name="email" required placeholder='Enter Email Here' data-aos='fade-left'/>
    <button className='emailbuttn' data-aos='fade-left'>Subscribe</button>
  </div>
          </div>
          
      </div>

{/* below hero */}
<div className='wlcmbox'>
  <div>

  <h1 className='animation' data-aos='fade-right'>WELCOME TO BSCUSTOMZ</h1>
  </div>
  
<div>

  <p data-aos='fade'>We have any part for any vehicle.</p>
</div>
</div>

<div class="grid-container" data-aos='zoom-in'>
  <div class="grid-item">
    <img src={light} alt="Picture 1"/>
  </div>
  <div class="grid-item">
    <img src={bp} alt="Picture 2"/>
  </div>
  <div class="grid-item">
    <img src={elec} alt="Picture 2"/>
  </div>
  <div class="grid-item">
    <img src={int} alt="Picture 2"/>
  </div>
  <div class="grid-item">
    <img src={pfm} alt="Picture 2"/>
  </div>
  <div class="grid-item">
    <img src={oth} alt="Picture 2"/>
  </div>
  <div class="grid-item">
    <img src={vd} alt="Picture 2"/>
  </div>
  <div class="grid-item">
    <img src={wheels} alt="Picture 2"/>
  </div>
  <div class="grid-item">
    <img src={rpp} alt="Picture 2"/>
  </div>
  <div class="grid-item">
    <img src={ext} alt="Picture 2"/>
  </div>
  {/* <!-- Repeat for other pictures --> */}  
</div>


<div className='wwd'>
<heading><h1 className='txtf1' data-aos='fade-right'>WHAT WE DO ?</h1><p data-aos='fade-left'>Our Services</p></heading>
<div className='cds' data-aos='zoom-in'>
  <div className='crd'>
    <img src={pfm}/>
    <h4>Upgrading Your <br></br>Car's Performance !</h4>
    <p>We help you getting the<br></br> max potential of <br></br>your car</p>
    <button className='emailbuttn'>Learn More!</button>
  </div>
  <div className='crd'>
    <img src={light}/>
    <h4>Upgrading Your <br></br>Car's Headlight !</h4>
    <p>No more fear of dark<br></br>roads, illuminate your<br></br> way with our custom setups</p>
    <button className='emailbuttn'>Learn More!</button>
  </div>
  <div className='crd'>
    <img src={ext}/>
    <h4>Upgrading Your <br></br>Car's Exterior !</h4>
    <p>Bored with your car's<br></br>old look ? Upgrade your car's <br></br>exterior with us !</p>
    <button className='emailbuttn'>Learn More!</button> 
  </div>
</div>
</div> 


<div className='box4' data-aos='fade'>
  <div className='txtf' data-aos='fade-right'>FIND YOUR OWN</div>
  <div className='txtfy' data-aos='fade-right'>STYLE</div>
  <p className='t4' data-aos='fade-left'>Our professional team will help you <br></br>choose perfect parts<br></br>for your vehicle</p>
</div>




<div className='wwd'>
<heading><h1 className='txtf1' data-aos='fade-right'>FEATURED BRAND </h1><p data-aos='fade-left'> WHEELS BY VOSSEN</p></heading>
<div className='cds2' data-aos='zoom-in'>
  {/* <div className='crd2'> */}
  <div className='crd'>
    <img className='vsnimg' src={vsn1}/>
    <h4>Vossen Precision VPS-310</h4>
    <h4>58,999 ₹</h4>
    {/* <button className='emailbuttn'>Learn More!</button> */}
  </div>
  <div className='crd'>
    <img className='vsnimg' src={vsn2}/>
    <h4>Vossen Precision VPS-306</h4>
    <h4>63,000 ₹</h4>
    {/* <button className='emailbuttn'>Learn More!</button> */}
  </div>
  <div className='crd'>
    <img className='vsnimg' src={vsn3}/>
    <h4>Vossen Precision VPS-323</h4>
    <h4>48,999 ₹</h4>
    {/* <button className='emailbuttn'>Learn More!</button>  */}
  </div>
  <div className='crd'>
    <img className='vsnimg' src={vsn4}/>
    <h4>Vossen Precision VPS-302</h4>
    <h4>78,999 ₹</h4>
    {/* <button className='emailbuttn'>Learn More!</button> */}
  </div>
  <div className='crd'>
    <img className='vsnimg' src={vsn5}/>
    <h4>Vossen Precision VPS-309</h4>
    <h4>89,999 ₹</h4>
    {/* <button className='emailbuttn'>Learn More!</button> */}
  </div>
  <div className='crd'>
    <img className='vsnimg' src={vsn6}/>
    <h4>Vossen Precision VPS-332</h4>
    <h4>61,999 ₹</h4>
    {/* <button className='emailbuttn'>Learn More!</button>  */}
  </div>
</div>
<div className='btnbtnvsn'>
  <button className='emailbuttn'>Shop Vossen</button>
  <button className='emailbuttn'>More Brands</button>
</div>
</div> 


<div className='testimonials' data-aos='fade'>
<div className='txtf' data-aos='fade-right'>WHY US ?</div>
  <div className='txtfy' data-aos='fade-left'>TESTIMONIALS</div>
</div>


<div className='testm' data-aos='fade-right'>
  <div className='t1' >
    <img className='testimg' src={ext}/>
    <h3>Mr. singh</h3>
  <p>Automobile journalist</p>
  <p>We really loved the services proviided by bs customs at best price and best service.</p></div>
  <div className='t1'>
    <img className='testimg' src={ext}/>
    <h3>Mr. singh</h3>
  <p>Automobile journalist</p>
  <p>We really loved the services proviided by bs customs at best price and best service.</p></div>
  <div className='t1'>
    <img className='testimg' src={ext}/>
    <h3>Mr. singh</h3>
  <p>Automobile journalist</p>
  <p>We really loved the services proviided by bs customs at best price and best service.</p></div>
  <div className='t1'>
    <img className='testimg' src={ext}/>
    <h3>Mr. singh</h3>
  <p>Automobile journalist</p>
  <p>We really loved the services proviided by bs customs at best price and best service.</p></div>
</div>


<div className='newsltr'>
  <>
  <h3>SUBSCRIBE AND GET DISCOUNT</h3>
  </>
  <>
  <input id="contact-form-email" class="form-input" type="email" name="email" required placeholder='Enter Email Here'/>
  <button className='emailbuttn'>Subscribe</button>
  </>
</div>




        {/* bs customs old code was here */}
      </> 

     :
      <>

      {   Object.entries(groupedProducts).map(([category, items]) => {
         const filteredItems = items.filter(
           (item) =>
             item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             category.toLowerCase().includes(searchQuery.toLowerCase()));
      
         if (filteredItems.length > 0) {
           return (<div>
             <br></br>
             <h4 style={{ width: "96%", marginLeft: "auto", marginRight: "auto", textAlign: "center" }} className='category'>Showing results for {searchQuery}</h4>
             <br></br>
             <div key={category}>
               <h2 className='container-fluid'>{category}</h2>
               <hr />
               <br></br>
               <div className='product-container'>
                 <div className='product-list'>
                   {filteredItems.map((item) => (
                     <div>
                       {/* <div key={item.name} className='product' onClick={()=>handleProductClick(item)}> */}
                       <Link className='itemslink' key={item.name} to={`/product/${item.name}`}>
                         
                         <div key={item.name} className='product'>
                           <img key={item.image} style={{ "height": "80px", "display": "flex", "margin": "auto" }} src={`./${item.image}`} alt={item.title} />
                           <p style={{ "textAlign": "center" }} >{item.name}</p>
                           <p style={{ "textAlign": "center" }} >{item.title}</p>
                         </div>
      
                       </Link>
      
                       </div>
                   ))}
                 </div>
               </div>
              </div>
             </div>
           );
         }
         
        
         return null;
       })}

      </>
      
      }

      <Footer />
      <div className='endbar'>
      BSCUSTOMZ &copy; 2023 All rights reserved. Terms of use and Privacy policy.
</div>

    </div>
  )
}




