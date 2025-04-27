import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

function Products() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: '#d63384' }}>Our Products</h2>
      <div className="row">
        {[1, 2, 3].map((item) => (
          <div className="col-md-4 mb-4" key={item}>
            <Card className="shadow-sm" style={{ borderRadius: '20px' }}>
              <Card.Img variant="top" src={`https://via.placeholder.com/300x200?text=Candle+${item}`} />
              <Card.Body>
                <Card.Title>Luxury Candle {item}</Card.Title>
                <Card.Text>R180 for 2 candles</Card.Text>
                <Form.Group className="mb-3">
                  <Form.Label>Select Quantity:</Form.Label>
                  <Form.Select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    {[1,2,3,4,5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Button variant="danger" style={{ backgroundColor: '#d63384', border: 'none' }}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
