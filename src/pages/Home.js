import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const categories = [
  { name: 'Groceries', image: 'https://via.placeholder.com/150' },
  { name: 'Home Appliances', image: 'https://via.placeholder.com/150' },
  { name: 'Clothes', image: 'https://via.placeholder.com/150' },
  { name: 'Toys', image: 'https://via.placeholder.com/150' },
  { name: 'Video Games', image: 'https://via.placeholder.com/150' },
  { name: 'Electronics', image: 'https://via.placeholder.com/150' },
  { name: 'Eco-Friendly', image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchQuery}`);
  };

  return (
    <Container fluid>
      <h1 className="text-center my-4">In-Store Navigation</h1>
      <Form className="d-flex justify-content-center my-4">
        <Form.Control
          type="text"
          placeholder="Search for products"
          className="w-50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="primary" className="ml-2" onClick={handleSearch}>Search</Button>
      </Form>
      <h2 className="text-center my-4">Shop by Category</h2>
      <Row className="d-flex justify-content-center">
        {categories.map((category, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="category-card">
              <Card.Img variant="top" src={category.image} />
              <Card.Body>
                <Card.Title className="text-center">{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
