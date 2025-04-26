function ContactUs() {
    return (
      <div className="text-center">
        <h2>Contact Us</h2>
        <p className="mt-3">We would love to hear from you!</p>
        <p>Email us at: <a href="mailto:homescentsza@example.com">homescentsza@example.com</a></p>
        <p>WhatsApp us: <a href="https://wa.me/27710000000">+27 71 000 0000</a></p>
  
        <form className="mt-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100">Send Message</button>
        </form>
      </div>
    );
  }
  
  export default ContactUs;
  