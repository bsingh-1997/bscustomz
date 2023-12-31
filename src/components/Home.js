import './Home.css'
import React, { useEffect, useState } from 'react'
import data from "./data.json"
import imging from './IMG_9971.jpg'
import Header from './Header';
import Footer from './Footer';
import Alert from './Alert';
import ProductDetail from './ProductDetail';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

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
  }, [searchQuery]);






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
      <Header searchbar={true} setSearchQuery={setSearchQuery} />
      <Alert />
      {!searchQuery ? <>
        <div className='container'>
          {/* <img style={{"height":"160px"}} src={imging}/>
        {data.name}
        {data.title}
        {data.map((items)=>{
          return (
            <div className='container'key={items.name}>
            <img style={{"height":"80px"}} src={items.image}/>

                <div className='container'>{items.name}</div>
                
                {items.title}
                
                
                </div>
                )
        })} */}
          <div className='container'>
            <div className='imgelogo'>
              <img className='mainlogo' src={imging} />

            </div>

          </div>
          <br></br><br></br>
          <div style={{ "textAlign": "center", "marginTop": "10px", "marginBottom": "20px" }}>Welcome to BsCustomz - Your Ultimate Destination for Automotive Excellence! 🚀<br></br>
            Join our community of passionate auto enthusiasts and gearheads, and let's take your automotive experience to the next level! Start your journey today. 🏁
            {/* 
Rev up your automotive journey with us and explore a world of possibilities. From top-notch performance parts to eye-catching custom stickers, LED bulbs that light up the road, and all the mods your ride craves – we've got it all under one roof.
<br></br>
🔧 Unleash Your Ride's Potential: Upgrade your vehicle's performance with our premium parts and expert guidance.
<br></br>
🎨 Customize with Style: Stand out on the streets with our unique custom stickers and decals.
<br></br>
💡 Illuminate Your Path: Experience safer and brighter drives with our cutting-edge LED bulbs.
<br></br>

🤝 Personalized Service: We're here to assist you every step of the way. Contact us for custom orders, expert advice, and unbeatable customer service.
<br></br>
Join our community of passionate auto enthusiasts and gearheads, and let's take your automotive experience to the next level! Start your journey today. 🏁
<br></br> */}
          </div>
          <br></br>
          <br></br>
          <h4 style={{ "textAlign": "center", "color": "red", "opacity": "60%" }}>Categories</h4>
          {
            uniqueCategories.map((category) => (
              <ul>

                <li key={category}>{category}</li>
              </ul>



            ))
          }
          <div>
            {/* <br></br> */}
            <br></br>
            {/* <br></br> */}
          </div>
          <h4 style={{ "textAlign": "center", "color": "red", "opacity": "60%" }}>Our Products</h4>
          {/* {Object.keys(groupedProducts).map((category) => (
             <div key={category}>
                <br></br>
                <br></br>
          <h2 className='container-fluid'>{category}</h2>
          <hr/>
          <div className="product-container">
          <div className="product-list">
            
            {groupedProducts[category].map((product) => (
              <div key={product.name} className="product ">
                <img style={{"height":"80px" , "display":"flex" , "margin":"auto"}} src={`./${product.image}`} alt={product.title} />
                <p style={{"textAlign":"center"}} >{product.name}</p>
                <p style={{"textAlign":"center"}} >{product.title}</p>
              </div>
            ))}

                    


          </div>
          </div>
        </div>
      ))} */}


          {/* <div> */}
            {/* {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {items
              .filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase() || category.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
          </ul>
        </div>
      ))} */}

            <div>






              {


                Object.entries(groupedProducts).map(([category, items]) => {
                  const filteredItems = items.filter(
                    (item) =>
                      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      category.toLowerCase().includes(searchQuery.toLowerCase())
                  );

                  if (filteredItems.length > 0) {
                    return (
                      <div key={category}>
                        <h2 className='container-fluid'>{category}</h2>
                        <hr />
                        <br></br>
                        <div className='product-container'>
                          <div className='product-list'>
                            {filteredItems.map((item) => (
                              <>
                                {/* <div key={item.name} className='product' onClick={()=>handleProductClick(item)}> */}
                                <Link className='itemslink' key={item.name} to={`/product/${item.name}`}>
                                  <div key={item.name} className='product'>
                                    <img key={item.image} style={{ "height": "80px", "display": "flex", "margin": "auto" }} src={`./${item.image}`} alt={item.title} />
                                    <p style={{ "textAlign": "center" }} >{item.name}</p>
                                    <p style={{ "textAlign": "center" }} >{item.title}</p>

                                  </div>
                                </Link>

                              </>
                            ))}
                          </div>
                        </div>

                      </div>

                    );

                  }
                  return null;
                })}

            {/* </div> */}
          </div>


        </div>

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
    </div>
  )
}




