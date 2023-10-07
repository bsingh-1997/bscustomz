import './Home.css'
import React from 'react'
import data from "./data.json" 
import imging from './IMG_9971.jpg'
import Header from './Header';
import Footer from './Footer';
import Alert from './Alert';
// import imgimg from './items/CMS5144_1.jpg'
export default function Home() {
    // console.log(data)
    // Group products by category
  const groupedProducts = data.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
  return (
    <div>
      <Header />
      <Alert/>
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
        <img className='mainlogo' src={imging}/>

          </div>

        </div>
        <br></br><br></br>
        <div style={{"textAlign":"center","marginTop":"10px","marginBottom":"20px"}}>Welcome to BsCustomz - Your Ultimate Destination for Automotive Excellence! 🚀<br></br>

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
<br></br>
</div>
<br></br>
<br></br>
<h4 style={{"textAlign":"center","color":"red","opacity":"60%"}}>Categories</h4>
<div>
<br></br>
<br></br>
<br></br>
</div>
<h4 style={{"textAlign":"center","color":"red","opacity":"60%"}}>Our Products</h4>
         {Object.keys(groupedProducts).map((category) => (
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
      ))}
    </div>
      <Footer/>
    </div>
  )
}
