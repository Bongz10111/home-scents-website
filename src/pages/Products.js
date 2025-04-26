function Products() {
    const products = [
      { name: "Rose Candle", price: "R180", description: "Soft rose fragrance in a pink jar." },
      { name: "Lavender Candle", price: "R180", description: "Relaxing lavender scent for your home." },
      { name: "Vanilla Candle", price: "R180", description: "Warm vanilla fragrance for cozy vibes." },
    ];
  
    return (
      <div>
        <h2 className="text-center mb-4">Our Products</h2>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100" style={{ backgroundColor: '#ffe6f0' }}>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text fw-bold">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Products;
  