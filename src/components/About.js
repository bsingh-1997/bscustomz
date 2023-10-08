import React from 'react'
import Header from './Header'
import imging from './IMG_9971.jpg'

export default function About() {
  return (<>
  <Header/>
  <div>
          <div className='imgelogo'>
        <img className='mainlogo' style={{
  width: "100%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
}} src={imging}/>

          </div>

                <div style={{"textAlign":"center",width:"80%",marginLeft:"auto",marginRight:"auto"}}>Welcome to BsCustomz - Your Ultimate Destination for Automotive Excellence! 🚀<br></br>

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

  </div>
  </>
  )
}
