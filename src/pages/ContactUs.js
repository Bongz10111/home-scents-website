import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactUs() {
  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center" style={{ color: '#d63384' }}>Contact Us</h2>
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message..." required />
        </Form.Group>
        <Button variant="danger" type="submit" style={{ backgroundColor: '#d63384', border: 'none' }}>
          Send Message
        </Button>
      </Form>
      <p className="mt-4 text-center">You can also email us directly at: <strong>homescentsza@gmail.com</strong></p>
    </div>
  );
}

export default ContactUs;
