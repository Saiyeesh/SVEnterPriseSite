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
        const response = await fetch('http://localhost:3000/api/contact', {
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
                <input type="text" value={formData.name} onChange={handleChange} name="name" placeholder="Name" className="inputType"/>
                <input type="tel" value={formData.phone} onChange={handleChange} name="phone" placeholder="Phone Number" className="inputType"/>
                <input type="text" value={formData.btype} onChange={handleChange} name="btype" placeholder="Non-Woven Bag Type" className="inputType"/>
                <input type="text" value={formData.quantity} onChange={handleChange} name="quantity"  placeholder="Quantity In KG(Note:MOQ is 500KG" className="inputType"/>
                <textarea value={formData.message} onChange={handleChange} name="message" placeholder="Message" className="area"/>
                <button type="submit">Send</button>
            </form>
            <div className="secoundPart2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60935.84788619457!2d77.85133409648368!3d17.34011538578368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc95fa20ed9eacf%3A0x9210918a23ea6a08!2sVikarabad%2C%20Telangana%20501102!5e0!3m2!1sen!2sin!4v1734928237396!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="location"></iframe>
            </div>
        </div>
        <p>{status}</p>
     </div>
    </>
  )
}

export default Contact
