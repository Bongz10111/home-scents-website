import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Lavender Candle',
    description: 'Relaxing lavender scent to calm your space.',
    price: 150,
    imageUrl: 'https://via.placeholder.com/300x200?text=Lavender+Candle',
  },
  {
    id: 2,
    name: 'Vanilla Diffuser',
    description: 'Sweet vanilla fragrance for a cozy atmosphere.',
    price: 120,
    imageUrl: 'https://via.placeholder.com/300x200?text=Vanilla+Diffuser',
  },
  {
    id: 3,
    name: 'Citrus Room Spray',
    description: 'Energizing citrus blend to freshen up any room.',
    price: 90,
    imageUrl: 'https://via.placeholder.com/300x200?text=Citrus+Room+Spray',
  },
];

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Home Scents</h1>
      <p>Your home, your scent, your peace.</p>
    </div>
  );
}

function Products() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Our Products</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem',
        marginTop: '1rem',
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            background: '#fff',
            padding: '1rem',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>R {product.price}</strong></p>
            <Link to={`/product/${product.id}`} style={{ color: '#db4cb2', textDecoration: 'underline' }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div style={{ padding: '2rem' }}>Product not found.</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }} />
      <p>{product.description}</p>
      <p><strong>R {product.price}</strong></p>
      <Link to="/products" style={{ color: '#db4cb2', textDecoration: 'underline' }}>
        Back to Products
      </Link>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>About Us</h2>
      <p>We create beautiful scents for beautiful homes. Home Scents is proudly South African and women-owned.</p>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Us</h2>
      <p>Have questions or want to collaborate? Reach out to us at contact@homescents.co.za</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ backgroundColor: '#ffe6f0', minHeight: '100vh' }}>
      <Router>
        <nav style={{
          background: 'linear-gradient(to right, #db4cb2, #a64ca6)',
          padding: '1rem',
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
