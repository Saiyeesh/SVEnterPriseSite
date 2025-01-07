import React from "react";
import "./Contact.css"

import { useState } from "react"

function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      btype: '',
      quantity: '',
      message: ''
    })

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('Sending...');
  
      try {
        const response = await fetch('https://deploying-backend-hfsx.onrender.com/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), 
        }); 
  
        if (response.ok) {
          setStatus('Message sent successfully!');
        } else {
          setStatus('Error sending message.');
        }
      } catch (error) {
        setStatus('Network error. Please try again later.');
        console.error('Error:', error);
      }
      setFormData({
        name: '',
        phone: '',
        btype: '',
        quantity: '',
        message: '' 
      });
    };


  return (
    <>
     <div className="contactBack">
        <div className="contactFirstPart">
            <h1>____ CONTACT US ____</h1>
            <p>LET'S GET IN TOUCH</p>
        </div>
        <div className="contactSecoundPart">
            <form onSubmit={handleSubmit} className="secoundPart">
                <input type="text" value={formData.name} onChange={handleChange} name="name" placeholder="Name" required className="inputType"/>
                <input type="tel" value={formData.phone} onChange={handleChange} name="phone" placeholder="Phone Number" required className="inputType"/>
                <input type="text" value={formData.btype} onChange={handleChange} name="btype" placeholder="Non-Woven Bag Type" required className="inputType"/>
                <input type="text" value={formData.quantity} onChange={handleChange} name="quantity"  placeholder="Quantity In KG(Note:MOQ is 250KG)" required className="inputType"/>
                <textarea value={formData.message} onChange={handleChange} name="message" placeholder="Message" required className="area"/>
                <button type="submit">Send</button>
            </form>
            <div className="secoundPart2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42772.77845288112!2d77.89779330279096!3d17.37824330635356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99f2bc5c223d%3A0xba19fe69218267c7!2sSV-ENTERPRISES%20Non-woven%20Bags%20%26%20Printing!5e0!3m2!1sen!2sin!4v1736269323319!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <p>{status}</p>
     </div>
    </>
  )
}

export default Contact
