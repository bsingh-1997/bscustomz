import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';
import './contactform.css'
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setalert] = useState('');

  const isSendButtonDisabled = !message || !email || !name;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send the email
    emailjs.sendForm('service_p7xx4qs', 'template_0r0nx2l',document.getElementById('myForm')
    , 'tS5eS0D7fQfDWlnhR')
    
    // emailjs.sendForm('service_p7xx4qs', 'template_0r0nx2l', {
    //   from_name: name,
    //   from_email: email,
    //   message: message,
    // }, 'tS5eS0D7fQfDWlnhR')
    
    .then((response) => {
        setalert("Email sent successfully!")
        console.log('Email sent successfully:', response);
        setTimeout(() => {
           setalert('') 
        }, 3000);        
    })
    .catch((error) => {
        setalert("Email Error!")
      console.error('Email error:', error);
    });

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (<>
    <Header/>
    {alert && <div class="alert alert-primary" style={{marginLeft:".5rem",marginRight:".5rem"}} role="alert">
  {alert}
    </div>}
    <div className='container'>
        Send us an email
    </div>
    <form id="myForm" onSubmit={handleSubmit}>
   <input
     type="text"
     name="from_name"
     placeholder="Name"
     value={name}
     onChange={(e) => setName(e.target.value)}
     />
   <input
     type="email"
     name="from_email"
     placeholder="Email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
   />
   <textarea
     name="message"
     placeholder="Message"
     value={message}
     onChange={(e) => setMessage(e.target.value)}
     />
   <button className='buttonin' type="submit" disabled={isSendButtonDisabled} >Send</button>
</form>

     </>
  );
};

export default ContactForm;
