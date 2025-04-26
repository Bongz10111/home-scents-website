function Home() {
    return (
      <div className="text-center">
        <h1 className="mb-4">Welcome to HOME SCENTS</h1>
        <p>Bring luxury and peace into your home with our beautiful scented candles.</p>
        <img 
          src="https://images.unsplash.com/photo-1615473671431-b7f0fb7bb1ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
          alt="Candles" 
          className="img-fluid rounded mt-4"
          style={{ maxHeight: '400px' }}
        />
      </div>
    );
  }
  
  export default Home;
  