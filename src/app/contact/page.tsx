'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is where you would typically send the form data to a server
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. We\'ll be in touch soon!'
    });
    
    // Reset form after success
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // In a real application, you would add error handling here
  };

  return (
    <main>
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          
          <div className="content-wrapper">
            <p className="lead-text">
              Ready to transform your business with elegant automation? Get in touch with our team.
            </p>
            
            <div className="contact-form-wrapper">
              {formStatus.submitted && formStatus.success ? (
                <div className="success-message" style={{ textAlign: 'center', padding: '20px' }}>
                  <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Message Sent</h3>
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="cta-btn">Send Message</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}